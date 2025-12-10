// Biomedical Quiz Questions Database
const questionDatabase = {
    anatomy: [
        {
            question: "Which chamber of the heart receives oxygenated blood from the lungs?",
            options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
            correct: 2,
            explanation: "The left atrium receives oxygenated blood from the pulmonary veins returning from the lungs."
        },
        {
            question: "What is the largest bone in the human body?",
            options: ["Tibia", "Fibula", "Femur", "Humerus"],
            correct: 2,
            explanation: "The femur (thigh bone) is the longest and strongest bone in the human body."
        },
        {
            question: "Which part of the nervous system controls involuntary functions like heartbeat?",
            options: ["Central nervous system", "Peripheral nervous system", "Autonomic nervous system", "Somatic nervous system"],
            correct: 2,
            explanation: "The autonomic nervous system controls involuntary functions including heart rate, digestion, and breathing."
        },
        {
            question: "What is the functional unit of the kidney?",
            options: ["Glomerulus", "Nephron", "Collecting duct", "Loop of Henle"],
            correct: 1,
            explanation: "The nephron is the functional unit of the kidney, responsible for filtration, reabsorption, and secretion."
        },
        {
            question: "Which muscle type is found in the walls of blood vessels?",
            options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Striated muscle"],
            correct: 2,
            explanation: "Smooth muscle is found in blood vessel walls and other organs, allowing for involuntary contractions."
        }
    ],
    
    biochemistry: [
        {
            question: "What is the primary function of enzymes in biological systems?",
            options: ["Energy storage", "Catalyzing reactions", "Structural support", "Information storage"],
            correct: 1,
            explanation: "Enzymes are biological catalysts that accelerate chemical reactions by lowering activation energy."
        },
        {
            question: "Which molecule is the primary energy currency of cells?",
            options: ["ADP", "ATP", "GTP", "NADH"],
            correct: 1,
            explanation: "ATP (Adenosine triphosphate) serves as the primary energy currency in cellular processes."
        },
        {
            question: "What type of bond holds amino acids together in proteins?",
            options: ["Hydrogen bonds", "Ionic bonds", "Peptide bonds", "Van der Waals forces"],
            correct: 2,
            explanation: "Peptide bonds are covalent bonds that link amino acids together to form proteins."
        },
        {
            question: "In which organelle does the citric acid cycle occur?",
            options: ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Golgi apparatus"],
            correct: 1,
            explanation: "The citric acid cycle (Krebs cycle) occurs in the mitochondrial matrix."
        },
        {
            question: "What is the normal pH range of human blood?",
            options: ["6.8-7.2", "7.35-7.45", "7.5-7.8", "8.0-8.5"],
            correct: 1,
            explanation: "Human blood pH is tightly regulated between 7.35-7.45 to maintain proper physiological function."
        }
    ],

    cellbiology: [
        {
            question: "What structure regulates what enters and exits the cell?",
            options: ["Cell wall", "Cytoplasm", "Cell membrane", "Nucleus"],
            correct: 2,
            explanation: "The cell membrane (plasma membrane) is selectively permeable and controls molecular transport."
        },
        {
            question: "Which organelle is responsible for protein synthesis?",
            options: ["Mitochondria", "Ribosomes", "Lysosomes", "Peroxisomes"],
            correct: 1,
            explanation: "Ribosomes are the cellular structures where protein synthesis occurs."
        },
        {
            question: "During which phase of mitosis do chromosomes align at the cell's equator?",
            options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            correct: 1,
            explanation: "During metaphase, chromosomes align at the metaphase plate (cell's equator)."
        },
        {
            question: "What is the function of the endoplasmic reticulum?",
            options: ["DNA replication", "Protein and lipid synthesis", "Energy production", "Waste disposal"],
            correct: 1,
            explanation: "The ER synthesizes proteins (rough ER) and lipids (smooth ER) and transports materials."
        },
        {
            question: "Which process allows cells to engulf large particles?",
            options: ["Osmosis", "Diffusion", "Endocytosis", "Active transport"],
            correct: 2,
            explanation: "Endocytosis is the process by which cells engulf external materials by wrapping them in membrane."
        }
    ],

    genetics: [
        {
            question: "What does DNA stand for?",
            options: ["Deoxyribonucleic acid", "Diribonucleic acid", "Deoxyribose nucleic acid", "Deoxyribonuclease acid"],
            correct: 0,
            explanation: "DNA stands for Deoxyribonucleic acid, the molecule that carries genetic information."
        },
        {
            question: "How many chromosomes does a normal human diploid cell contain?",
            options: ["23", "44", "46", "48"],
            correct: 2,
            explanation: "Normal human diploid cells contain 46 chromosomes (23 pairs)."
        },
        {
            question: "What is a gene?",
            options: ["A chromosome", "A DNA sequence coding for a trait", "A type of cell", "A protein"],
            correct: 1,
            explanation: "A gene is a specific DNA sequence that codes for a particular trait or protein."
        },
        {
            question: "What type of inheritance pattern does sickle cell anemia follow?",
            options: ["Dominant", "Recessive", "Codominant", "X-linked"],
            correct: 1,
            explanation: "Sickle cell anemia follows an autosomal recessive inheritance pattern."
        },
        {
            question: "What is the role of mRNA in protein synthesis?",
            options: ["DNA replication", "Carrying genetic information from DNA to ribosomes", "Energy production", "Cell division"],
            correct: 1,
            explanation: "mRNA carries genetic information from DNA in the nucleus to ribosomes for protein synthesis."
        }
    ],

    microbiology: [
        {
            question: "Which type of microorganism lacks a membrane-bound nucleus?",
            options: ["Viruses", "Bacteria", "Fungi", "Protozoa"],
            correct: 1,
            explanation: "Bacteria are prokaryotes, meaning they lack a membrane-bound nucleus."
        },
        {
            question: "What is the primary method bacteria use for reproduction?",
            options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
            correct: 2,
            explanation: "Bacteria reproduce primarily through binary fission, a form of asexual reproduction."
        },
        {
            question: "Which structure helps bacteria adhere to surfaces?",
            options: ["Flagella", "Pili", "Ribosomes", "Plasmids"],
            correct: 1,
            explanation: "Pili are hair-like structures that help bacteria adhere to surfaces and exchange genetic material."
        },
        {
            question: "What type of organism requires a host cell to replicate?",
            options: ["Bacteria", "Fungi", "Viruses", "Algae"],
            correct: 2,
            explanation: "Viruses are obligate intracellular parasites that require host cells for replication."
        },
        {
            question: "Which process involves the uptake of naked DNA from the environment by bacteria?",
            options: ["Conjugation", "Transduction", "Transformation", "Translation"],
            correct: 2,
            explanation: "Transformation is the process where bacteria take up naked DNA from their environment."
        }
    ],

    pharmacology: [
        {
            question: "What is the study of how drugs are absorbed, distributed, metabolized, and excreted?",
            options: ["Pharmacodynamics", "Pharmacokinetics", "Toxicology", "Pharmacogenomics"],
            correct: 1,
            explanation: "Pharmacokinetics studies the ADME processes: Absorption, Distribution, Metabolism, and Excretion."
        },
        {
            question: "Which organ is primarily responsible for drug metabolism?",
            options: ["Kidney", "Liver", "Lung", "Heart"],
            correct: 1,
            explanation: "The liver is the primary site of drug metabolism, containing enzymes that modify drugs."
        },
        {
            question: "What does EC50 represent in pharmacology?",
            options: ["Toxic dose", "Lethal dose", "Effective concentration for 50% response", "Maximum concentration"],
            correct: 2,
            explanation: "EC50 is the concentration of drug that produces 50% of the maximum response."
        },
        {
            question: "Which type of drug interaction involves competition for the same receptor?",
            options: ["Synergism", "Antagonism", "Potentiation", "Additive effect"],
            correct: 1,
            explanation: "Antagonism occurs when drugs compete for the same receptor, with one blocking the other's effect."
        },
        {
            question: "What is bioavailability?",
            options: ["Drug potency", "Fraction of drug reaching systemic circulation", "Drug elimination rate", "Receptor binding affinity"],
            correct: 1,
            explanation: "Bioavailability is the fraction of an administered drug that reaches systemic circulation unchanged."
        }
    ],

    immunology: [
        {
            question: "Which cells are primarily responsible for antibody production?",
            options: ["T cells", "B cells", "NK cells", "Macrophages"],
            correct: 1,
            explanation: "B cells differentiate into plasma cells, which are responsible for antibody production."
        },
        {
            question: "What is the function of MHC Class I molecules?",
            options: ["Activate B cells", "Present intracellular peptides to CD8+ T cells", "Present extracellular antigens", "Complement activation"],
            correct: 1,
            explanation: "MHC Class I molecules present intracellular peptides to CD8+ T cells for immune surveillance."
        },
        {
            question: "Which immunoglobulin is most abundant in blood?",
            options: ["IgA", "IgD", "IgE", "IgG"],
            correct: 3,
            explanation: "IgG is the most abundant immunoglobulin in blood and provides long-term immunity."
        },
        {
            question: "What type of immunity is provided by vaccines?",
            options: ["Natural active", "Natural passive", "Artificial active", "Artificial passive"],
            correct: 2,
            explanation: "Vaccines provide artificial active immunity by stimulating the immune system with antigens."
        },
        {
            question: "Which complement pathway is activated by antibody-antigen complexes?",
            options: ["Classical pathway", "Alternative pathway", "Lectin pathway", "Terminal pathway"],
            correct: 0,
            explanation: "The classical complement pathway is activated by antibody-antigen complexes."
        }
    ],

    biomaterials: [
        {
            question: "What property describes a material's ability to support cell growth?",
            options: ["Biocompatibility", "Biodegradability", "Bioactivity", "Bioinertness"],
            correct: 2,
            explanation: "Bioactivity refers to a material's ability to elicit a specific biological response and support cell growth."
        },
        {
            question: "Which biomaterial property is most important for temporary implants?",
            options: ["High strength", "Biodegradability", "Corrosion resistance", "Low cost"],
            correct: 1,
            explanation: "Biodegradability is crucial for temporary implants as they should safely dissolve in the body."
        },
        {
            question: "What type of biomaterial response involves minimal tissue reaction?",
            options: ["Bioactive", "Bioinert", "Biodegradable", "Biotoxic"],
            correct: 1,
            explanation: "Bioinert materials elicit minimal tissue reaction and are surrounded by fibrous tissue."
        },
        {
            question: "Which material is commonly used for bone replacement due to its similarity to natural bone?",
            options: ["Titanium", "Hydroxyapatite", "Silicone", "Polyethylene"],
            correct: 1,
            explanation: "Hydroxyapatite is chemically similar to the mineral component of bone, making it ideal for bone replacement."
        },
        {
            question: "What is the main advantage of biodegradable polymers in drug delivery?",
            options: ["High strength", "Controlled release", "Low cost", "Easy sterilization"],
            correct: 1,
            explanation: "Biodegradable polymers allow controlled drug release as they gradually break down in the body."
        }
    ],

    tissueengineering: [
        {
            question: "What are the three main components of tissue engineering?",
            options: ["Cells, growth factors, nutrients", "Scaffolds, cells, signals", "Proteins, cells, matrix", "Genes, cells, environment"],
            correct: 1,
            explanation: "The tissue engineering triad consists of scaffolds, cells, and signaling molecules (growth factors)."
        },
        {
            question: "What is the primary function of a scaffold in tissue engineering?",
            options: ["Provide nutrients", "Support cell growth and organization", "Deliver drugs", "Generate electricity"],
            correct: 1,
            explanation: "Scaffolds provide structural support and guide cell growth, proliferation, and differentiation."
        },
        {
            question: "Which type of stem cells can differentiate into any cell type in the body?",
            options: ["Multipotent", "Pluripotent", "Totipotent", "Unipotent"],
            correct: 2,
            explanation: "Totipotent stem cells can differentiate into any cell type, including extraembryonic tissues."
        },
        {
            question: "What technique is used to create 3D tissue constructs layer by layer?",
            options: ["Electrospinning", "Bioprinting", "Molding", "Casting"],
            correct: 1,
            explanation: "Bioprinting uses additive manufacturing to create 3D tissue constructs layer by layer."
        },
        {
            question: "Which process involves removing cellular components while preserving ECM structure?",
            options: ["Decellularization", "Recellularization", "Crosslinking", "Polymerization"],
            correct: 0,
            explanation: "Decellularization removes cells from tissues while preserving the extracellular matrix structure."
        }
    ],

    biomechanics: [
        {
            question: "What type of bone loading occurs during normal walking?",
            options: ["Pure compression", "Pure tension", "Combined compression and bending", "Pure shear"],
            correct: 2,
            explanation: "During walking, bones experience combined loading including compression and bending forces."
        },
        {
            question: "Which law explains how bones adapt to mechanical stress?",
            options: ["Newton's Law", "Hooke's Law", "Wolff's Law", "Pascal's Law"],
            correct: 2,
            explanation: "Wolff's Law states that bones adapt their structure in response to mechanical stresses placed upon them."
        },
        {
            question: "What is the modulus of elasticity a measure of?",
            options: ["Strength", "Stiffness", "Toughness", "Hardness"],
            correct: 1,
            explanation: "The modulus of elasticity (Young's modulus) measures a material's stiffness or resistance to deformation."
        },
        {
            question: "In gait analysis, what does the term 'stance phase' refer to?",
            options: ["When foot is in contact with ground", "When foot is in the air", "The transition between steps", "The maximum knee flexion"],
            correct: 0,
            explanation: "The stance phase is the period during gait when the foot is in contact with the ground."
        },
        {
            question: "What type of joint allows movement in multiple planes?",
            options: ["Hinge joint", "Pivot joint", "Ball and socket joint", "Gliding joint"],
            correct: 2,
            explanation: "Ball and socket joints (like the hip and shoulder) allow movement in multiple planes and rotational movement."
        }
    ],

    bioinformatics: [
        {
            question: "What does BLAST stand for in bioinformatics?",
            options: ["Basic Local Alignment Search Tool", "Biological Laboratory Analysis System Tool", "Binary Large Alignment Sequence Tool", "Biochemical Logic Analysis Search Tool"],
            correct: 0,
            explanation: "BLAST stands for Basic Local Alignment Search Tool, used for comparing biological sequences."
        },
        {
            question: "Which file format is commonly used to store DNA sequences?",
            options: ["JPEG", "FASTA", "PDF", "MP4"],
            correct: 1,
            explanation: "FASTA is a text-based format widely used for storing and sharing DNA, RNA, and protein sequences."
        },
        {
            question: "What is the purpose of sequence alignment in bioinformatics?",
            options: ["Data storage", "Identifying similarities between sequences", "Image processing", "Statistical analysis"],
            correct: 1,
            explanation: "Sequence alignment identifies regions of similarity between sequences, indicating functional or evolutionary relationships."
        },
        {
            question: "Which algorithm is commonly used for multiple sequence alignment?",
            options: ["BLAST", "ClustalW", "HMMER", "Bowtie"],
            correct: 1,
            explanation: "ClustalW is a widely used algorithm for progressive multiple sequence alignment."
        },
        {
            question: "What does phylogenetics study?",
            options: ["Gene expression", "Evolutionary relationships", "Protein structure", "Cell division"],
            correct: 1,
            explanation: "Phylogenetics studies evolutionary relationships and constructs evolutionary trees based on genetic data."
        }
    ]
};

// Category information with descriptions and icons
const categoryInfo = {
    anatomy: {
        name: "Anatomy & Physiology",
        description: "Study of body structure and function",
        icon: "fas fa-user-md",
        color: "#e74c3c"
    },
    biochemistry: {
        name: "Biochemistry",
        description: "Chemical processes in living organisms",
        icon: "fas fa-flask",
        color: "#3498db"
    },
    cellbiology: {
        name: "Cell Biology",
        description: "Structure and function of cells",
        icon: "fas fa-cell",
        color: "#2ecc71"
    },
    genetics: {
        name: "Genetics",
        description: "Heredity and genetic variation",
        icon: "fas fa-dna",
        color: "#9b59b6"
    },
    microbiology: {
        name: "Microbiology",
        description: "Study of microorganisms",
        icon: "fas fa-bacteria",
        color: "#f39c12"
    },
    pharmacology: {
        name: "Pharmacology",
        description: "Drug action and effects",
        icon: "fas fa-pills",
        color: "#1abc9c"
    },
    immunology: {
        name: "Immunology",
        description: "Immune system function",
        icon: "fas fa-shield-virus",
        color: "#e67e22"
    },
    biomaterials: {
        name: "Biomaterials",
        description: "Materials for medical applications",
        icon: "fas fa-cube",
        color: "#34495e"
    },
    tissueengineering: {
        name: "Tissue Engineering",
        description: "Creating biological tissues",
        icon: "fas fa-layer-group",
        color: "#8e44ad"
    },
    biomechanics: {
        name: "Biomechanics",
        description: "Mechanical aspects of biology",
        icon: "fas fa-running",
        color: "#27ae60"
    },
    bioinformatics: {
        name: "Bioinformatics",
        description: "Computational biology and data analysis",
        icon: "fas fa-laptop-code",
        color: "#2980b9"
    }
};

// Function to get random questions from a category
function getRandomQuestions(category, count = 10) {
    if (!questionDatabase[category]) {
        return [];
    }
    
    const questions = [...questionDatabase[category]];
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, questions.length));
}

// Function to get mixed questions from all categories
function getMixedQuestions(count = 10) {
    const allQuestions = [];
    
    // Collect all questions from all categories
    Object.keys(questionDatabase).forEach(category => {
        questionDatabase[category].forEach(question => {
            allQuestions.push({
                ...question,
                category: category
            });
        });
    });
    
    // Shuffle and return requested count
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, allQuestions.length));
}

// Function to get questions ensuring representation from multiple categories
function getBalancedMixedQuestions(count = 10) {
    const categories = Object.keys(questionDatabase);
    const questionsPerCategory = Math.floor(count / categories.length);
    const remainder = count % categories.length;
    
    let selectedQuestions = [];
    
    // Get questions from each category
    categories.forEach((category, index) => {
        const categoryQuestions = [...questionDatabase[category]];
        const shuffled = categoryQuestions.sort(() => 0.5 - Math.random());
        let take = questionsPerCategory;
        
        // Distribute remainder questions
        if (index < remainder) {
            take++;
        }
        
        const selected = shuffled.slice(0, Math.min(take, categoryQuestions.length));
        selected.forEach(question => {
            selectedQuestions.push({
                ...question,
                category: category
            });
        });
    });
    
    // If we don't have enough questions, fill from random categories
    if (selectedQuestions.length < count) {
        const remaining = count - selectedQuestions.length;
        const allQuestions = [];
        
        Object.keys(questionDatabase).forEach(category => {
            questionDatabase[category].forEach(question => {
                if (!selectedQuestions.some(q => q.question === question.question)) {
                    allQuestions.push({
                        ...question,
                        category: category
                    });
                }
            });
        });
        
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());
        selectedQuestions = selectedQuestions.concat(shuffled.slice(0, remaining));
    }
    
    // Final shuffle
    return selectedQuestions.sort(() => 0.5 - Math.random());
}