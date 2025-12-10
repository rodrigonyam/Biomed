// Biomedical Quiz Application
class BiomedicalQuiz {
    constructor() {
        console.log('BiomedicalQuiz constructor called');
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.questionStates = []; // Track if question has been answered
        this.questionResults = []; // Track if answer was correct/incorrect
        this.startTime = null;
        this.endTime = null;
        this.statistics = this.loadStatistics();
        this.reviewMode = false;
        this.questionSubmitted = false;
        this.userProfile = this.loadUserProfile();
        this.leaderboard = this.loadLeaderboard();
        this.achievements = this.loadAchievements();
        
        console.log('Initializing BiomedicalQuiz...');
        this.init();
    }

    init() {
        console.log('Initializing BiomedicalQuiz components...');
        this.bindEvents();
        console.log('Events bound');
        this.updateStatistics();
        console.log('Statistics updated');
        this.checkFirstTimeUser();
        console.log('First time user checked');
        this.initializeAchievements();
        console.log('Achievements initialized');
        this.updateLeaderboard();
        console.log('Leaderboard updated');
        this.updateProfile();
        console.log('Profile updated');
        console.log('BiomedicalQuiz initialization complete');
    }

    bindEvents() {
        // Navigation events
        const homeBtn = document.getElementById('homeBtn');
        const statsBtn = document.getElementById('statsBtn');
        const leaderboardBtn = document.getElementById('leaderboardBtn');
        const profileBtn = document.getElementById('profileBtn');
        const aboutBtn = document.getElementById('aboutBtn');
        
        console.log('Navigation elements found:', {
            homeBtn: !!homeBtn,
            statsBtn: !!statsBtn,
            leaderboardBtn: !!leaderboardBtn,
            profileBtn: !!profileBtn,
            aboutBtn: !!aboutBtn
        });
        
        if (homeBtn) homeBtn.addEventListener('click', () => { console.log('Home clicked'); this.showScreen('welcome'); });
        if (statsBtn) statsBtn.addEventListener('click', () => { console.log('Stats clicked'); this.showScreen('stats'); });
        if (leaderboardBtn) leaderboardBtn.addEventListener('click', () => { console.log('Leaderboard clicked'); this.showScreen('leaderboard'); });
        if (profileBtn) profileBtn.addEventListener('click', () => { console.log('Profile clicked'); this.showScreen('profile'); });
        if (aboutBtn) aboutBtn.addEventListener('click', () => { console.log('About clicked'); this.showScreen('about'); });

        // Profile events
        document.getElementById('profileForm').addEventListener('submit', (e) => this.createProfile(e));
        document.getElementById('skipProfile').addEventListener('click', () => this.skipProfile());
        document.getElementById('editProfile').addEventListener('click', () => this.editProfile());

        // Leaderboard events
        document.getElementById('leaderboardFilter').addEventListener('change', () => this.updateLeaderboard());
        document.getElementById('categoryFilter').addEventListener('change', () => this.updateLeaderboard());

        // Category selection events (info display only)
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.showCategoryInfo(category);
            });
        });

        // Start button events
        document.querySelectorAll('.start-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log('Start button clicked');
                const category = e.currentTarget.dataset.category;
                console.log('Category:', category);
                this.startQuiz(category);
            });
        });

        // Random quiz button
        document.getElementById('randomQuiz').addEventListener('click', () => {
            this.startQuiz('mixed');
        });

        // Quiz control events
        document.getElementById('exitQuiz').addEventListener('click', () => this.exitQuiz());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('submitAnswerBtn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submitQuizBtn').addEventListener('click', () => this.submitQuiz());

        // Results events
        document.getElementById('reviewAnswers').addEventListener('click', () => this.reviewAnswers());
        document.getElementById('retakeQuiz').addEventListener('click', () => this.retakeQuiz());
        document.getElementById('newQuiz').addEventListener('click', () => this.showScreen('welcome'));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    showScreen(screenName) {
        console.log('showScreen called with:', screenName);
        try {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });

            // Show target screen
            const targetScreen = document.getElementById(screenName + 'Screen');
            console.log('Target screen element:', targetScreen);
            if (targetScreen) {
                targetScreen.classList.add('active');
                console.log('Screen activated:', screenName + 'Screen');
            } else {
                console.error('Screen element not found:', screenName + 'Screen');
                return false;
            }
        } catch (error) {
            console.error('Error in showScreen:', error);
            return false;
        }

        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const targetBtn = document.getElementById(screenName + 'Btn');
        if (targetBtn) {
            targetBtn.classList.add('active');
        }

        // Update content based on screen
        switch(screenName) {
            case 'stats':
                this.updateStatistics();
                break;
            case 'leaderboard':
                this.updateLeaderboard();
                break;
            case 'profile':
                this.updateProfile();
                break;
        }
    }

    showCategoryInfo(category) {
        // Optional: Could show category description or stats
        // For now, just highlight the category
        document.querySelectorAll('.category-card').forEach(card => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
        
        const categoryCard = document.querySelector(`[data-category="${category}"]`).closest('.category-card');
        if (categoryCard) {
            categoryCard.style.transform = 'scale(1.05)';
            categoryCard.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.3)';
        }
    }

    // Profile Management
    checkFirstTimeUser() {
        if (!this.userProfile.username) {
            // Show profile modal for first-time users
            setTimeout(() => {
                document.getElementById('profileModal').classList.remove('hidden');
            }, 1000);
        }
    }

    loadUserProfile() {
        const saved = localStorage.getItem('biomedUserProfile');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            username: '',
            displayName: '',
            institution: '',
            studyField: '',
            joinDate: null,
            totalPoints: 0,
            currentStreak: 0,
            bestStreak: 0,
            rank: 0,
            lastActivityDate: null
        };
    }

    createProfile(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const username = formData.get('username').trim();
        if (username.length < 3) {
            this.showError('Username must be at least 3 characters long');
            return;
        }

        this.userProfile = {
            username: username.toLowerCase(),
            displayName: formData.get('displayName') || username,
            institution: formData.get('institution') || '',
            studyField: formData.get('studyField') || '',
            joinDate: new Date().toISOString(),
            totalPoints: 0,
            currentStreak: 0,
            bestStreak: 0,
            rank: 0,
            lastActivityDate: new Date().toISOString()
        };

        this.saveUserProfile();
        document.getElementById('profileModal').classList.add('hidden');
        this.updateProfile();
        this.showWelcomeMessage();
    }

    skipProfile() {
        this.userProfile.username = 'anonymous_' + Date.now();
        this.userProfile.displayName = 'Anonymous User';
        this.userProfile.joinDate = new Date().toISOString();
        this.saveUserProfile();
        document.getElementById('profileModal').classList.add('hidden');
        this.updateProfile();
    }

    editProfile() {
        // Pre-fill form with existing data
        document.getElementById('username').value = this.userProfile.username;
        document.getElementById('displayName').value = this.userProfile.displayName;
        document.getElementById('institution').value = this.userProfile.institution;
        document.getElementById('studyField').value = this.userProfile.studyField;
        document.getElementById('profileModal').classList.remove('hidden');
    }

    saveUserProfile() {
        localStorage.setItem('biomedUserProfile', JSON.stringify(this.userProfile));
    }

    updateProfile() {
        document.getElementById('profileDisplayName').textContent = this.userProfile.displayName;
        document.getElementById('profileUsername').textContent = `@${this.userProfile.username}`;
        document.getElementById('profileInstitution').textContent = this.userProfile.institution;
        document.getElementById('profileRank').textContent = `#${this.userProfile.rank || '-'}`;
        document.getElementById('profileStreak').textContent = this.userProfile.currentStreak;
        document.getElementById('profilePoints').textContent = this.userProfile.totalPoints;
        
        this.updateRecentActivity();
    }

    showWelcomeMessage() {
        // Create welcome toast
        const toast = document.createElement('div');
        toast.className = 'toast success';
        toast.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Welcome to Biomedical Quiz Hub, ${this.userProfile.displayName}!
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    startQuiz(category) {
        console.log('startQuiz called with category:', category);
        this.reviewMode = false;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = new Date();

        // Get questions based on category
        try {
            if (category === 'mixed') {
                console.log('Loading mixed questions');
                this.currentQuiz = {
                    category: 'mixed',
                    name: 'Mixed Topics Quiz',
                    questions: getBalancedMixedQuestions(10),
                    icon: 'fas fa-random'
                };
            } else {
                console.log('Loading questions for category:', category);
                console.log('CategoryInfo available:', typeof categoryInfo !== 'undefined');
                console.log('getRandomQuestions available:', typeof getRandomQuestions !== 'undefined');
                this.currentQuiz = {
                    category: category,
                    name: categoryInfo[category].name,
                    questions: getRandomQuestions(category, 10),
                    icon: categoryInfo[category].icon
                };
            }
            console.log('Quiz loaded:', this.currentQuiz);
        } catch (error) {
            console.error('Error loading quiz:', error);
            return;
        }

        // Initialize user answers and question states arrays
        this.userAnswers = new Array(this.currentQuiz.questions.length).fill(null);
        this.questionStates = new Array(this.currentQuiz.questions.length).fill(false);
        this.questionResults = new Array(this.currentQuiz.questions.length).fill(null);
        this.questionSubmitted = false;

        this.showScreen('quiz');
        this.displayQuestion();
        this.updateQuizHeader();
    }

    displayQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const questionElement = document.getElementById('questionText');
        const answersContainer = document.getElementById('answersContainer');

        // Clear previous content
        answersContainer.innerHTML = '';
        
        // Set question text
        questionElement.textContent = question.question;

        // Create answer options
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            optionElement.dataset.optionIndex = index;

            // Check if this option was previously selected
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }

            // Add review mode styling
            if (this.reviewMode) {
                if (index === question.correct) {
                    optionElement.classList.add('correct');
                } else if (this.userAnswers[this.currentQuestionIndex] === index && index !== question.correct) {
                    optionElement.classList.add('incorrect');
                }
            }

            optionElement.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;

            // Add click event if not in review mode
            if (!this.reviewMode) {
                optionElement.addEventListener('click', () => this.selectAnswer(index));
            }

            answersContainer.appendChild(optionElement);
        });

        // Handle feedback display
        const feedbackContainer = document.getElementById('feedbackContainer');
        if (this.questionStates[this.currentQuestionIndex] || this.reviewMode) {
            this.showFeedback(this.userAnswers[this.currentQuestionIndex], question.correct, question.explanation);
        } else {
            feedbackContainer.classList.add('hidden');
        }

        this.questionSubmitted = this.questionStates[this.currentQuestionIndex];
        this.updateProgress();
        this.updateControls();
    }

    selectAnswer(optionIndex) {
        if (this.reviewMode || this.questionSubmitted) return;

        // Remove previous selection
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Add selection to clicked option
        const selectedOption = document.querySelector(`[data-option-index="${optionIndex}"]`);
        selectedOption.classList.add('selected');

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = optionIndex;

        // Update controls
        this.updateControls();
    }

    submitAnswer() {
        if (this.questionSubmitted || this.userAnswers[this.currentQuestionIndex] === null) return;

        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        const correctAnswer = question.correct;

        // Mark question as submitted and track correctness
        this.questionSubmitted = true;
        this.questionStates[this.currentQuestionIndex] = true;
        this.questionResults[this.currentQuestionIndex] = userAnswer === correctAnswer;

        // Show visual feedback on options
        document.querySelectorAll('.answer-option').forEach((option, index) => {
            if (index === correctAnswer) {
                option.classList.add('correct');
            } else if (index === userAnswer && index !== correctAnswer) {
                option.classList.add('incorrect');
            }
            // Disable further clicks
            option.style.pointerEvents = 'none';
        });

        // Show feedback
        this.showFeedback(userAnswer, correctAnswer, question.explanation);

        // Update controls
        this.updateControls();
    }

    showFeedback(userAnswer, correctAnswer, explanation) {
        const feedbackContainer = document.getElementById('feedbackContainer');
        const feedbackContent = document.getElementById('feedbackContent');
        
        const isCorrect = userAnswer === correctAnswer;
        
        feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
        feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        feedbackContent.innerHTML = `
            <div class="feedback-result ${isCorrect ? 'correct' : 'incorrect'}">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>${isCorrect ? 'Correct!' : 'Incorrect'}</span>
            </div>
            <div class="feedback-explanation">
                <strong>Explanation:</strong> ${explanation}
            </div>
        `;
    }

    updateQuizHeader() {
        const categoryTitle = document.getElementById('categoryTitle');
        categoryTitle.innerHTML = `<i class="${this.currentQuiz.icon}"></i> ${this.currentQuiz.name}`;
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const questionCounter = document.getElementById('questionCounter');
        
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuiz.questions.length) * 100;
        progressFill.style.width = `${progress}%`;
        
        questionCounter.textContent = `${this.currentQuestionIndex + 1} / ${this.currentQuiz.questions.length}`;
        
        // Update question progress tracker
        this.updateQuestionProgress();
    }

    updateQuestionProgress() {
        const progressTracker = document.getElementById('questionProgress');
        if (!progressTracker) return;
        
        progressTracker.innerHTML = '';
        
        for (let i = 0; i < this.currentQuiz.questions.length; i++) {
            const statusElement = document.createElement('div');
            statusElement.className = 'question-status';
            statusElement.textContent = i + 1;
            
            // Determine status
            let statusClass = 'unanswered';
            let title = `Question ${i + 1}: Not answered`;
            
            if (this.questionStates[i]) {
                if (this.questionResults[i] === true) {
                    statusClass = 'correct';
                    title = `Question ${i + 1}: Correct`;
                } else if (this.questionResults[i] === false) {
                    statusClass = 'incorrect';
                    title = `Question ${i + 1}: Incorrect`;
                }
            }
            
            if (i === this.currentQuestionIndex) {
                statusClass += ' current';
                title += ' (Current)';
            }
            
            statusElement.classList.add(statusClass);
            statusElement.title = title;
            
            // Add click handler to navigate to question
            statusElement.addEventListener('click', () => {
                if (this.reviewMode || this.questionStates[i]) {
                    this.goToQuestion(i);
                }
            });
            
            progressTracker.appendChild(statusElement);
        }
    }

    updateControls() {
        const prevBtn = document.getElementById('prevBtn');
        const submitAnswerBtn = document.getElementById('submitAnswerBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitQuizBtn = document.getElementById('submitQuizBtn');

        // Previous button
        prevBtn.disabled = this.currentQuestionIndex === 0;

        const hasAnswer = this.userAnswers[this.currentQuestionIndex] !== null;
        const isLastQuestion = this.currentQuestionIndex === this.currentQuiz.questions.length - 1;
        const allQuestionsAnswered = this.questionStates.every(state => state);

        if (this.reviewMode) {
            // Review mode: only show navigation
            submitAnswerBtn.classList.add('hidden-control');
            nextBtn.classList.remove('hidden-control');
            submitQuizBtn.classList.add('hidden-control');
            nextBtn.disabled = false;
        } else if (this.questionSubmitted) {
            // Question submitted: show next or submit quiz
            submitAnswerBtn.classList.add('hidden-control');
            if (isLastQuestion) {
                nextBtn.classList.add('hidden-control');
                submitQuizBtn.classList.remove('hidden-control');
            } else {
                nextBtn.classList.remove('hidden-control');
                submitQuizBtn.classList.add('hidden-control');
                nextBtn.disabled = false;
            }
        } else {
            // Question not submitted: show submit answer button
            submitAnswerBtn.classList.remove('hidden-control');
            nextBtn.classList.add('hidden-control');
            submitQuizBtn.classList.add('hidden-control');
            submitAnswerBtn.disabled = !hasAnswer;
        }

        // Special case: if all questions answered, always show submit quiz option
        if (allQuestionsAnswered && !this.reviewMode) {
            submitQuizBtn.classList.remove('hidden-control');
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.questionSubmitted = this.questionStates[this.currentQuestionIndex];
            
            // Re-enable option clicks for previous question if not submitted
            if (!this.questionSubmitted && !this.reviewMode) {
                document.querySelectorAll('.answer-option').forEach(option => {
                    option.style.pointerEvents = 'auto';
                });
            }
            
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
            this.currentQuestionIndex++;
            this.questionSubmitted = this.questionStates[this.currentQuestionIndex];
            
            // Re-enable option clicks for new question if not submitted
            if (!this.questionSubmitted && !this.reviewMode) {
                document.querySelectorAll('.answer-option').forEach(option => {
                    option.style.pointerEvents = 'auto';
                });
            }
            
            this.displayQuestion();
        }
    }

    goToQuestion(index) {
        if (index >= 0 && index < this.currentQuiz.questions.length) {
            this.currentQuestionIndex = index;
            this.questionSubmitted = this.questionStates[this.currentQuestionIndex];
            
            // Re-enable option clicks for new question if not submitted
            if (!this.questionSubmitted && !this.reviewMode) {
                document.querySelectorAll('.answer-option').forEach(option => {
                    option.style.pointerEvents = 'auto';
                });
            }
            
            this.displayQuestion();
        }
    }

    submitQuiz() {
        this.endTime = new Date();
        this.calculateResults();
        this.saveStatistics();
        this.showResults();
    }

    calculateResults() {
        let correctAnswers = 0;
        const categoryBreakdown = {};

        this.currentQuiz.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) {
                correctAnswers++;
            }

            // Track by category for breakdown
            const questionCategory = question.category || this.currentQuiz.category;
            if (!categoryBreakdown[questionCategory]) {
                categoryBreakdown[questionCategory] = { correct: 0, total: 0 };
            }
            categoryBreakdown[questionCategory].total++;
            if (isCorrect) {
                categoryBreakdown[questionCategory].correct++;
            }
        });

        this.currentResults = {
            score: correctAnswers,
            total: this.currentQuiz.questions.length,
            percentage: Math.round((correctAnswers / this.currentQuiz.questions.length) * 100),
            categoryBreakdown: categoryBreakdown,
            duration: Math.round((this.endTime - this.startTime) / 1000),
            category: this.currentQuiz.category
        };
    }

    showResults() {
        this.showScreen('results');

        // Update score display
        const scorePercentage = document.getElementById('scorePercentage');
        const scoreText = document.getElementById('scoreText');
        const scoreCircle = document.querySelector('.score-circle');

        scorePercentage.textContent = `${this.currentResults.percentage}%`;
        scoreText.textContent = `${this.currentResults.score}/${this.currentResults.total}`;
        scoreCircle.style.setProperty('--score', this.currentResults.percentage);

        // Update category breakdown
        const breakdownContainer = document.getElementById('categoryBreakdown');
        breakdownContainer.innerHTML = '';

        Object.entries(this.currentResults.categoryBreakdown).forEach(([category, data]) => {
            const percentage = Math.round((data.correct / data.total) * 100);
            const categoryName = categoryInfo[category]?.name || category;
            
            const breakdownItem = document.createElement('div');
            breakdownItem.className = 'breakdown-item';
            breakdownItem.innerHTML = `
                <span>${categoryName}</span>
                <span>${data.correct}/${data.total} (${percentage}%)</span>
            `;
            breakdownContainer.appendChild(breakdownItem);
        });

        // Animate score circle
        setTimeout(() => {
            this.animateScoreCircle();
        }, 500);
    }

    animateScoreCircle() {
        const scoreCircle = document.querySelector('.score-circle');
        let currentScore = 0;
        const targetScore = this.currentResults.percentage;
        const increment = targetScore / 50; // 50 steps for smooth animation

        const timer = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(timer);
            }
            scoreCircle.style.setProperty('--score', currentScore);
        }, 20);
    }

    reviewAnswers() {
        this.reviewMode = true;
        this.currentQuestionIndex = 0;
        this.showScreen('quiz');
        this.displayQuestion();
        this.updateQuizHeader();

        // Update quiz header to show review mode
        const categoryTitle = document.getElementById('categoryTitle');
        categoryTitle.innerHTML = `<i class="fas fa-eye"></i> Review: ${this.currentQuiz.name}`;
    }

    retakeQuiz() {
        // Reset all question states
        this.questionStates = [];
        this.questionResults = [];
        this.questionSubmitted = false;
        this.startQuiz(this.currentQuiz.category);
    }

    exitQuiz() {
        if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
            this.showScreen('welcome');
        }
    }

    handleKeyboard(e) {
        if (document.getElementById('quizScreen').classList.contains('active')) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousQuestion();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (this.reviewMode || this.questionSubmitted) {
                        this.nextQuestion();
                    }
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    if (!this.reviewMode && !this.questionSubmitted && this.userAnswers[this.currentQuestionIndex] !== null) {
                        this.submitAnswer();
                    }
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    e.preventDefault();
                    const optionIndex = parseInt(e.key) - 1;
                    if (optionIndex < this.currentQuiz.questions[this.currentQuestionIndex].options.length) {
                        this.selectAnswer(optionIndex);
                    }
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.exitQuiz();
                    break;
            }
        }
    }

    // Statistics Management
    loadStatistics() {
        const saved = localStorage.getItem('biomedQuizStats');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            totalQuizzes: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            categoryStats: {},
            bestScore: 0,
            averageScore: 0,
            quizHistory: []
        };
    }

    saveStatistics() {
        // Update overall statistics
        this.statistics.totalQuizzes++;
        this.statistics.totalQuestions += this.currentResults.total;
        this.statistics.totalCorrect += this.currentResults.score;
        
        // Update best score
        if (this.currentResults.percentage > this.statistics.bestScore) {
            this.statistics.bestScore = this.currentResults.percentage;
        }
        
        // Update average score
        this.statistics.averageScore = Math.round((this.statistics.totalCorrect / this.statistics.totalQuestions) * 100);
        
        // Update category statistics
        Object.entries(this.currentResults.categoryBreakdown).forEach(([category, data]) => {
            if (!this.statistics.categoryStats[category]) {
                this.statistics.categoryStats[category] = { correct: 0, total: 0 };
            }
            this.statistics.categoryStats[category].correct += data.correct;
            this.statistics.categoryStats[category].total += data.total;
        });
        
        // Add to quiz history
        this.statistics.quizHistory.push({
            date: new Date().toISOString(),
            category: this.currentResults.category,
            score: this.currentResults.score,
            total: this.currentResults.total,
            percentage: this.currentResults.percentage,
            duration: this.currentResults.duration
        });
        
        // Keep only last 50 quiz records
        if (this.statistics.quizHistory.length > 50) {
            this.statistics.quizHistory = this.statistics.quizHistory.slice(-50);
        }
        
        // Update profile points and streaks
        this.updateProfileAfterQuiz();
        
        // Save to localStorage
        localStorage.setItem('biomedQuizStats', JSON.stringify(this.statistics));
        
        // Update leaderboard and check achievements
        this.updateLeaderboardData();
        this.checkAchievements();
    }

    updateProfileAfterQuiz() {
        const quizPoints = this.currentResults.score * 10; // 10 points per correct answer
        const bonusPoints = this.currentResults.percentage === 100 ? 20 : 0; // Perfect score bonus
        
        this.userProfile.totalPoints += quizPoints + bonusPoints;
        
        // Update streak logic
        const today = new Date().toDateString();
        const lastActivity = this.userProfile.lastActivityDate ? new Date(this.userProfile.lastActivityDate).toDateString() : null;
        
        if (lastActivity === today) {
            // Same day, no streak change
        } else {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (lastActivity === yesterday.toDateString()) {
                // Consecutive day, increment streak
                this.userProfile.currentStreak++;
                if (this.userProfile.currentStreak > this.userProfile.bestStreak) {
                    this.userProfile.bestStreak = this.userProfile.currentStreak;
                }
            } else {
                // Streak broken, reset to 1
                this.userProfile.currentStreak = 1;
            }
        }
        
        this.userProfile.lastActivityDate = new Date().toISOString();
        this.saveUserProfile();
    }

    showError(message) {
        const toast = document.createElement('div');
        toast.className = 'toast error';
        toast.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    updateStatistics() {
        // Update main statistics cards
        document.getElementById('totalQuizzes').textContent = this.statistics.totalQuizzes;
        document.getElementById('avgScore').textContent = `${this.statistics.averageScore}%`;
        document.getElementById('totalCorrect').textContent = this.statistics.totalCorrect;
        
        // Find best category
        let bestCategory = '-';
        let bestPercentage = 0;
        Object.entries(this.statistics.categoryStats).forEach(([category, data]) => {
            if (data.total > 0) {
                const percentage = Math.round((data.correct / data.total) * 100);
                if (percentage > bestPercentage) {
                    bestPercentage = percentage;
                    bestCategory = categoryInfo[category]?.name || category;
                }
            }
        });
        document.getElementById('bestCategory').textContent = bestCategory;
        
        // Update category statistics list
        const categoryStatsContainer = document.getElementById('categoryStats');
        categoryStatsContainer.innerHTML = '';
        
        if (Object.keys(this.statistics.categoryStats).length === 0) {
            categoryStatsContainer.innerHTML = '<p style="text-align: center; color: #64748b;">No quiz data available yet. Complete some quizzes to see your performance!</p>';
            return;
        }
        
        Object.entries(this.statistics.categoryStats)
            .sort(([,a], [,b]) => (b.correct/b.total) - (a.correct/a.total))
            .forEach(([category, data]) => {
                const percentage = Math.round((data.correct / data.total) * 100);
                const categoryName = categoryInfo[category]?.name || category;
                
                const statItem = document.createElement('div');
                statItem.className = 'category-stat-item';
                statItem.innerHTML = `
                    <span class="category-name">${categoryName}</span>
                    <span class="category-score">${data.correct}/${data.total} (${percentage}%)</span>
                `;
                categoryStatsContainer.appendChild(statItem);
            });
    }

    // Utility method to reset statistics (for development/testing)
    resetStatistics() {
        if (confirm('Are you sure you want to reset all statistics? This action cannot be undone.')) {
            localStorage.removeItem('biomedQuizStats');
            this.statistics = this.loadStatistics();
            this.updateStatistics();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.biomedQuiz = new BiomedicalQuiz();
    
    // Add reset statistics button to console for development
    console.log('Biomedical Quiz loaded! Use biomedQuiz.resetStatistics() to reset all stats.');
});

// Service Worker Registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}