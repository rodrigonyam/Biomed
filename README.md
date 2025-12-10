# Biomedical Quiz Hub 🧬

A comprehensive interactive quiz application designed for biomedical students and professionals to test their knowledge across 11 core biomedical disciplines.

## 🚀 Features

### **Quiz Categories**
- **Anatomy & Physiology** - Body structure and function
- **Biochemistry** - Chemical processes in living organisms
- **Cell Biology** - Structure and function of cells
- **Genetics** - Heredity and genetic variation
- **Microbiology** - Study of microorganisms
- **Pharmacology** - Drug action and effects
- **Immunology** - Immune system function
- **Biomaterials** - Materials for medical applications
- **Tissue Engineering** - Creating biological tissues
- **Biomechanics** - Mechanical aspects of biology
- **Bioinformatics** - Computational biology and data analysis

### **Interactive Features**
- ✅ **55 Total Questions** - 5 questions per category, professionally crafted
- 🎯 **Instant Feedback** - Immediate explanation after each answer
- 📊 **Visual Progress Tracking** - Real-time correctness indicators
- 🏆 **Comprehensive Statistics** - Track performance across all categories
- 👤 **User Profiles** - Personalized experience with achievements
- 🥇 **Leaderboard System** - Competitive ranking and scoring
- 🎖️ **Achievement Badges** - 12 different unlockable achievements
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

### **Quiz Modes**
- **Category-Specific** - Focus on individual subjects
- **Mixed Topics** - Balanced questions across all categories
- **Review Mode** - Review answers after completion

### **Smart Features**
- **Clickable Progress Dots** - Navigate between answered questions
- **Keyboard Navigation** - Arrow keys, Enter, number keys (1-4)
- **Persistent Data** - LocalStorage saves progress and statistics
- **Streak Tracking** - Daily quiz completion streaks
- **Performance Analytics** - Category breakdowns and trends

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Modern CSS with gradients, animations, and responsive design
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Storage**: Browser LocalStorage for persistence
- **Architecture**: Class-based JavaScript with modular design

## 📁 Project Structure

```
Biomed/
├── index.html          # Main application structure
├── styles.css          # Complete styling and responsive design
├── script.js           # Core application logic (BiomedicalQuiz class)
├── questions.js        # Question database and helper functions
├── README.md          # Project documentation
└── chat-summary.md    # Development process summary
```

## 🎮 How to Use

### **Starting a Quiz**
1. **Home Screen**: View all 11 biomedical categories
2. **Select Category**: Click any subject card to start a focused quiz
3. **Mixed Quiz**: Use "Random Quiz (Mixed Topics)" for variety
4. **Answer Questions**: Click options A, B, C, or D
5. **Submit Answers**: Get instant feedback and explanations
6. **Track Progress**: Visual indicators show correct/incorrect answers

### **Navigation**
- **Progress Dots**: Click to jump between answered questions
- **Keyboard Shortcuts**: 
  - Arrow keys: Navigate questions
  - Numbers 1-4: Select answers
  - Enter/Space: Submit answer
  - Escape: Exit quiz

### **Profile & Statistics**
- **Create Profile**: Set username and study details
- **View Stats**: Track performance across categories
- **Leaderboard**: See rankings and scores
- **Achievements**: Unlock badges for milestones

## 🏆 Achievement System

Unlock 12 different achievements:
- 🎯 **First Steps** - Complete your first quiz
- 🔥 **Perfect Score** - Get 100% on any quiz
- 📚 **Scholar** - Complete 10 quizzes
- ⚡ **Speed Demon** - Complete quiz in under 2 minutes
- 🎯 **Sharpshooter** - Get 5 questions right in a row
- 📖 **Bookworm** - Complete quizzes in 5 different categories
- 🧠 **Genius** - Score 90%+ on 5 quizzes
- 🔬 **Researcher** - Complete 25 quizzes
- 🎓 **Expert** - Get 80%+ average across all categories
- 🌟 **Perfectionist** - Get 100% on 3 different categories
- 🚀 **Overachiever** - Complete 50 quizzes
- 👑 **Quiz Master** - Ultimate achievement for top performers

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### **Installation**
1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Start Learning** - No setup required!

### **For Development**
```bash
# Clone repository
git clone [repository-url]
cd Biomed

# Start local server (optional)
python -m http.server 8000
# Open http://localhost:8000
```

## 📊 Question Database

- **Total Questions**: 55 professionally crafted questions
- **Categories**: 11 core biomedical disciplines
- **Question Types**: Multiple choice (4 options each)
- **Explanations**: Detailed explanations for every question
- **Difficulty**: Appropriate for undergraduate/graduate biomedical studies

## 🎨 Design Features

- **Modern UI**: Clean, professional interface
- **Color-Coded Categories**: Each subject has its unique color
- **Smooth Animations**: Transitions and hover effects
- **Mobile-First**: Responsive design for all screen sizes
- **Accessibility**: Keyboard navigation and ARIA labels
- **Visual Feedback**: Progress indicators and status updates

## 🔧 Customization

### **Adding Questions**
Edit `questions.js` to add new questions to any category:

```javascript
anatomy: [
    {
        question: "Your question here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 2, // Index of correct answer (0-3)
        explanation: "Detailed explanation of the correct answer."
    }
]
```

### **Styling**
Modify `styles.css` to customize colors, fonts, or layout:
- CSS custom properties for easy color changes
- Modular CSS structure for component updates
- Responsive breakpoints for mobile optimization

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional question content
- New achievement types
- Enhanced analytics
- Accessibility improvements
- Performance optimizations

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source. Feel free to use, modify, and distribute for educational purposes.

## 🎯 Future Enhancements

Potential features for future development:
- Server-side user accounts and synchronization
- Advanced analytics and learning insights
- Multiplayer quiz competitions
- Timed challenge modes
- Question difficulty levels
- Study guides and reference materials
- Integration with learning management systems

---

**Built with ❤️ for biomedical education**

*Empowering the next generation of healthcare professionals through interactive learning.*