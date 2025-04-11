// ================ IMPROVED DARK MODE ================
const toggleTheme = document.getElementById("toggleTheme");
const icon = toggleTheme.querySelector("i");

// ================ MOBILE MENU TOGGLE ================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
mobileMenuBtn.addEventListener("click", () => {
  document.querySelector(".navbar-right").classList.toggle("active");
});

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
  toggleTheme.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}
    
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
    toggleTheme.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
    toggleTheme.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
});

// ================ PROGRESS COLORS & CHAPTER DATA ================
const progressColors = {
  Mathematics: "#4caf50",
  Science: "#f44336",
  English: "#2196F3",
  "Social Science": "#ff9800",
  Hindi: "#9c27b0"
};

// CBSE Class 10 NCERT Syllabus with recommended books
const subjects = {
  "Mathematics": {
    chapters: [
      "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", 
      "Quadratic Equations", "Arithmetic Progressions", "Triangles", 
      "Coordinate Geometry", "Introduction to Trigonometry", 
      "Some Applications of Trigonometry", "Circles", 
      "Constructions", "Areas Related to Circles", 
      "Surface Areas and Volumes", "Statistics", "Probability"
    ],
    description: "Mathematics for Class 10 covers fundamental concepts in algebra, geometry, trigonometry, and statistics.",
    books: [
      { name: "NCERT Mathematics Textbook", link: "https://ncert.nic.in/textbook.php?jemh1=1-14" },
      { name: "RD Sharma Class 10", link: "https://www.amazon.in/Mathematics-Class-10-R-D-Sharma/dp/8194192890" },
      { name: "RS Aggarwal Class 10", link: "https://www.amazon.in/Secondary-School-Mathematics-Class-10/dp/8194192904" }
    ]
  },
  "Science": {
    physics: [
      "Light - Reflection and Refraction", 
      "Human Eye and Colourful World", 
      "Electricity", 
      "Magnetic Effects of Electric Current", 
      "Sources of Energy"
    ],
    chemistry: [
      "Chemical Reactions and Equations", 
      "Acids, Bases and Salts", 
      "Metals and Non-metals", 
      "Carbon and its Compounds", 
      "Periodic Classification of Elements"
    ],
    biology: [
      "Life Processes", 
      "Control and Coordination", 
      "How do Organisms Reproduce?", 
      "Heredity and Evolution", 
      "Our Environment", 
      "Management of Natural Resources"
    ],
    description: "Science for Class 10 includes Physics, Chemistry, and Biology with practical applications.",
    books: [
      { name: "NCERT Science Textbook", link: "https://ncert.nic.in/textbook.php?jesc1=1-16" },
      { name: "Lakhmir Singh Class 10", link: "https://www.amazon.in/Science-Class-10-Lakhmir-Singh/dp/9352530253" },
      { name: "Together With Science", link: "https://www.amazon.in/Together-Science-Class-10-Examination/dp/9386583695" }
    ]
  },
  "English": {
    books: {
      "First Flight": [
        "A Letter to God", 
        "Nelson Mandela: Long Walk to Freedom", 
        "Two Stories about Flying", 
        "From the Diary of Anne Frank", 
        "The Hundred Dresses–I", 
        "The Hundred Dresses–II", 
        "Glimpses of India", 
        "Mijbil the Otter", 
        "Madam Rides the Bus", 
        "The Sermon at Benares", 
        "The Proposal"
      ],
      "Footprints Without Feet": [
        "A Triumph of Surgery", 
        "The Thief's Story", 
        "The Midnight Visitor", 
        "A Question of Trust", 
        "Footprints without Feet", 
        "The Making of a Scientist", 
        "The Necklace", 
        "The Hack Driver", 
        "Bholi", 
        "The Book That Saved the Earth"
      ]
    },
    description: "English curriculum focuses on literature, grammar, and language skills development.",
    booksList: [
      { name: "NCERT First Flight", link: "https://ncert.nic.in/textbook.php?jeff1=1-11" },
      { name: "NCERT Footprints Without Feet", link: "https://ncert.nic.in/textbook.php?jefp1=1-10" },
      { name: "Wren & Martin High School Grammar", link: "https://www.amazon.in/Wren-Martin-High-School-English-Grammar/dp/9352530148" }
    ]
  },
  "Social Science": {
    history: [
      "The Rise of Nationalism in Europe", 
      "Nationalism in India", 
      "The Making of a Global World", 
      "The Age of Industrialisation", 
      "Print Culture and the Modern World"
    ],
    geography: [
      "Resources and Development", 
      "Water Resources", 
      "Agriculture", 
      "Minerals and Energy Resources", 
      "Manufacturing Industries", 
      "Lifelines of National Economy"
    ],
    politicalScience: [
      "Power-sharing", 
      "Federalism", 
      "Democracy and Diversity", 
      "Gender, Religion and Caste", 
      "Popular Struggles and Movements", 
      "Political Parties", 
      "Outcomes of Democracy", 
      "Challenges to Democracy"
    ],
    economics: [
      "Development", 
      "Sectors of the Indian Economy", 
      "Money and Credit", 
      "Globalisation and the Indian Economy", 
      "Consumer Rights"
    ],
    description: "Social Science covers History, Geography, Political Science, and Economics.",
    booksList: [
      { name: "NCERT Social Science Textbook", link: "https://ncert.nic.in/textbook.php?jess1=1-24" },
      { name: "All In One Social Science", link: "https://www.amazon.in/All-One-Social-Science-Class/dp/9311121862" },
      { name: "Xam Idea Social Science", link: "https://www.amazon.in/Xam-Idea-Social-Science-Class/dp/9389975629" }
    ]
  },
  "Hindi": {
    chapters: [
      "साखी", "पद", "दोहे", "मीरा के पद", 
      "माता का आँचल", "जॉर्ज पंचम की नाक", 
      "साना-साना हाथ जोड़ि", "एही ठैयाँ झुलनी हेरानी हो रामा!", 
      "संगतकार", "नेताजी का चश्मा", 
      "बालगोबिन भगत", "लखनवी अंदाज़", 
      "मानवीय करुणा की दिव्या चमक", "एक कहानी यह भी", 
      "स्त्री शिक्षा के विरोधी कुतर्कों का खंडन", "नौबतखाने में इबादत", 
      "संस्कृति", "अब कहाँ दूसरे के दुख से दुखी होने वाले"
    ],
    description: "हिंदी पाठ्यक्रम में गद्य, पद्य, और व्याकरण शामिल हैं।",
    books: [
      { name: "NCERT क्षितिज भाग 2", link: "https://ncert.nic.in/textbook.php?jehh1=1-18" },
      { name: "NCERT कृतिका भाग 2", link: "https://ncert.nic.in/textbook.php?jehk1=1-5" },
      { name: "सरस्वती हिंदी व्याकरण", link: "https://www.amazon.in/Saraswati-Hindi-Vyakaran-Class-10/dp/8173359201" }
    ]
  }
};

// ================ DOM ELEMENTS ================
const subjectList = document.getElementById("subjectList");
const subjectDisplay = document.getElementById("subjectDisplay");
const chapterList = document.getElementById("chapterList");
const subjectProgressContainer = document.getElementById("subjectProgressContainer");
const subjectProgressTitle = document.getElementById("subjectProgressTitle");
const currentSubjectName = document.getElementById("currentSubjectName");
const subjectProgressText = document.getElementById("subjectProgressText");
const subjectProgressFill = document.getElementById("subjectProgressFill");
const analyticsDisplay = document.getElementById("analyticsDisplay");
const motivationBtn = document.getElementById("motivationBtn");
const topperBtn = document.getElementById("topperBtn");
const analyticsBtn = document.getElementById("analyticsBtn");
const plannerBtn = document.getElementById("plannerBtn");
const mainProgressFill = document.getElementById("mainProgressFill");
const overallProgressText = document.getElementById("overallProgressText");
const plannerModal = document.getElementById("plannerModal");
const closeModal = document.querySelector(".close");
const calendar = document.getElementById("calendar");
const taskSection = document.getElementById("taskSection");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskDate = document.getElementById("taskDate");
const selectedDateTitle = document.getElementById("selectedDateTitle");
const doubtInput = document.getElementById("doubtInput");
const solveDoubtBtn = document.getElementById("solveDoubtBtn");

// Track currently selected subject and date
let selectedSubject = null;
let selectedDate = null;
let selectedSubjectCategory = null;
let selectedBook = null;

// ================ EVENT LISTENERS ================
motivationBtn.addEventListener("click", () => {
  window.open("https://youtube.com/playlist?list=PLTW7KORe8vkX3fr2JDnQTMou-MT9-9LIV&si=FIUVXuiVh4kVi8Hq", "_blank");
});

topperBtn.addEventListener("click", () => {
  window.open("https://youtu.be/l2GT0apSoDE?si=8SNmLMu36Gzy3hST", "_blank");
});

analyticsBtn.addEventListener("click", () => {
  showAnalytics();
});



plannerBtn.addEventListener("click", () => {
  plannerModal.style.display = "block";
  renderCalendar();
});

closeModal.addEventListener("click", () => {
  plannerModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === plannerModal) {
    plannerModal.style.display = "none";
  }
});

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

solveDoubtBtn.addEventListener("click", () => {
  const doubt = doubtInput.value.trim();
  if (doubt) {
    alert(`Your doubt "${doubt}" has been submitted! We'll help you solve it soon.`);
    doubtInput.value = "";
  } else {
    alert("Please enter your doubt first!");
  }
});

// ================ PLANNER FUNCTIONALITY ================
// ================ PLANNER FUNCTIONALITY ================
function renderCalendar() {
    calendar.innerHTML = "";
    
    // Compact day headers (single letters)
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    days.forEach(day => {
      const dayHeader = document.createElement("div");
      dayHeader.className = "calendar-header";
      dayHeader.textContent = day;
      dayHeader.style.fontSize = "12px"; // Smaller font
      calendar.appendChild(dayHeader);
    });
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Add empty cells
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.className = "calendar-day empty";
      calendar.appendChild(emptyDay);
    }
    
    // Add days with compact styling
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.textContent = day;
      dayElement.style.padding = "6px 0"; // Tighter padding
      dayElement.style.minHeight = "30px"; // Smaller cells
      dayElement.style.fontSize = "13px"; // Smaller text
      
      // Highlight today
      if (day === today.getDate() && currentMonth === today.getMonth()) {
        dayElement.classList.add("today");
      }
      
      dayElement.addEventListener("click", () => {
        // Remove previous selection
        document.querySelectorAll(".calendar-day").forEach(el => {
          el.classList.remove("selected");
        });
        
        // Set new selection
        dayElement.classList.add("selected");
        
        // Update selected date
        selectedDate = new Date(currentYear, currentMonth, day);
        taskDate.textContent = selectedDate.toLocaleDateString("en-US", { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
        
        // Show and load tasks
        taskSection.classList.remove("hidden");
        loadTasks(selectedDate);
        
        // Auto-scroll to tasks
        setTimeout(() => {
          taskSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      });
      
      calendar.appendChild(dayElement);
    }
  }
  
  function loadTasks(date) {
    const dateString = date.toDateString();
    const tasks = JSON.parse(localStorage.getItem(`tasks-${dateString}`)) || [];
    
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";
      taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
        <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
        <i class="fas fa-trash task-delete" data-index="${index}"></i>
      `;
      
      const checkbox = taskItem.querySelector(".task-checkbox");
      checkbox.addEventListener("change", () => {
        tasks[index].completed = checkbox.checked;
        localStorage.setItem(`tasks-${dateString}`, JSON.stringify(tasks));
        taskItem.querySelector(".task-text").classList.toggle("completed");
      });
      
      const deleteBtn = taskItem.querySelector(".task-delete");
      deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        localStorage.setItem(`tasks-${dateString}`, JSON.stringify(tasks));
        loadTasks(date);
      });
      
      taskList.appendChild(taskItem);
    });
  }
  
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText || !selectedDate) {
      alert("Please select a date and enter a task!");
      return;
    }
    
    const dateString = selectedDate.toDateString();
    const tasks = JSON.parse(localStorage.getItem(`tasks-${dateString}`)) || [];
    
    tasks.push({
      text: taskText,
      completed: false
    });
    
    localStorage.setItem(`tasks-${dateString}`, JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks(selectedDate);
    
    // Scroll to the new task
    taskList.scrollTop = taskList.scrollHeight;
  }
  
  // Event Listeners
  document.getElementById("addTaskBtn").addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

// ================ RENDER SUBJECTS IN SIDEBAR ================
function renderSubjects() {
    subjectList.innerHTML = "";
    
    Object.keys(subjects).forEach(subject => {
      const li = document.createElement("li");
      li.className = "subject-container";
      
      // Subject Header
      const subjectHeader = document.createElement("div");
      subjectHeader.textContent = subject;
      subjectHeader.className = "subject-header";
      
      subjectHeader.onclick = () => {
        // Toggle subject display
        if (selectedSubject === subject) {
          // Clicking the same subject again - hide it
          selectedSubject = null;
          selectedSubjectCategory = null;
          selectedBook = null;
          subjectDisplay.classList.add("hidden");
          subjectProgressContainer.classList.add("hidden");
          analyticsDisplay.classList.add("hidden");
        } else {
          // New subject selected
          selectedSubject = subject;
          selectedSubjectCategory = null;
          selectedBook = null;
          displaySubjectContent(subject);
          subjectProgressContainer.classList.remove("hidden");
          currentSubjectName.textContent = subject;
          subjectProgressFill.style.background = progressColors[subject];
          analyticsDisplay.classList.add("hidden");
        }
        
        // Toggle sidebar chapter list
        document.querySelectorAll(".subject-container").forEach(item => {
          if (item !== li) item.classList.remove("open");
        });
        li.classList.toggle("open");
      };
  
      // Chapter Container
      const chapterContainer = document.createElement("ul");
      chapterContainer.className = "chapter-container hidden";
      
      // Progress Container
      const progressContainer = document.createElement("div");
      progressContainer.className = "progress-container hidden";
      progressContainer.innerHTML = `
        <div class="progress-label">
          <span>${subject} Progress</span>
          <span id="progressText-${subject}">0%</span>
        </div>
        <div class="progress-bar">
          <div id="progressFill-${subject}" class="progress-fill" 
               style="background: ${progressColors[subject]}"></div>
        </div>
      `;
  
      // Add subject-specific content
      if (subject === "Science") {
        // Science has subcategories
        const physicsLi = createCategoryItem("Physics", subject);
        const chemistryLi = createCategoryItem("Chemistry", subject);
        const biologyLi = createCategoryItem("Biology", subject);
        
        chapterContainer.appendChild(physicsLi);
        chapterContainer.appendChild(chemistryLi);
        chapterContainer.appendChild(biologyLi);
      } else if (subject === "Social Science") {
        // Social Science has subcategories
        const historyLi = createCategoryItem("History", subject);
        const geographyLi = createCategoryItem("Geography", subject);
        const politicalScienceLi = createCategoryItem("Political Science", subject);
        const economicsLi = createCategoryItem("Economics", subject);
        
        chapterContainer.appendChild(historyLi);
        chapterContainer.appendChild(geographyLi);
        chapterContainer.appendChild(politicalScienceLi);
        chapterContainer.appendChild(economicsLi);
      } else if (subject === "English") {
        // English has books
        Object.keys(subjects[subject].books).forEach(book => {
          const bookLi = createBookItem(book, subject);
          chapterContainer.appendChild(bookLi);
        });
      } else {
        // Regular subjects with chapters (Mathematics, Hindi)
        const chapters = subjects[subject].chapters || [];
        chapters.forEach(chapter => {
          const chapterLi = createChapterItem(subject, chapter);
          chapterContainer.appendChild(chapterLi);
        });
      }
  
      li.appendChild(subjectHeader);
      li.appendChild(chapterContainer);
      li.appendChild(progressContainer);
      subjectList.appendChild(li);
    });
  }

function createCategoryItem(category, subject) {
  const li = document.createElement("li");
  li.className = "chapter-item";
  
  const categoryHeader = document.createElement("div");
  categoryHeader.className = "subject-header";
  categoryHeader.textContent = category;
  
  categoryHeader.onclick = (e) => {
    e.stopPropagation();
    selectedSubjectCategory = category.toLowerCase();
    selectedSubject = subject;
    selectedBook = null;
    displaySubjectContent(subject);
  };
  
  li.appendChild(categoryHeader);
  return li;
}

function createBookItem(book, subject) {
  const li = document.createElement("li");
  li.className = "chapter-item";
  
  const bookHeader = document.createElement("div");
  bookHeader.className = "subject-header";
  bookHeader.textContent = book;
  
  bookHeader.onclick = (e) => {
    e.stopPropagation();
    selectedBook = book;
    selectedSubject = subject;
    selectedSubjectCategory = null;
    displaySubjectContent(subject);
  };
  
  li.appendChild(bookHeader);
  return li;
}

function createChapterItem(subject, chapter) {
  const chapterLi = document.createElement("li");
  chapterLi.className = "chapter-item";
  
  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "chapter-checkbox";
  checkbox.dataset.subject = subject;
  checkbox.dataset.chapter = chapter;
  checkbox.checked = isChapterCompleted(subject, chapter);
  
  // Create chapter title
  const chapterTitle = document.createElement("span");
  chapterTitle.className = "chapter-title";
  chapterTitle.textContent = chapter;
  
  // Make entire item clickable
  chapterLi.addEventListener("click", (e) => {
    // Don't trigger if clicking the checkbox
    if (e.target.tagName === 'INPUT') return;
    
    // Toggle checkbox state
    checkbox.checked = !checkbox.checked;
    updateCheckboxState(subject, chapter, checkbox.checked);
    updateSubjectProgress(subject);
    updateOverallProgress();
    
    // Show in main content
    selectedSubject = subject;
    displaySubjectContent(subject);
  });

  // Add elements
  chapterLi.appendChild(checkbox);
  chapterLi.appendChild(chapterTitle);
  
  return chapterLi;
} 

// ================ DISPLAY SUBJECT CONTENT IN MAIN CONTENT ================
function displaySubjectContent(subject) {

    subjectDisplay.classList.remove("hidden");
    chapterList.innerHTML = "";
  
    // Update subject progress
    updateSubjectProgress(subject);
  
    if (subject === "Science") {
        subjectDisplay.querySelector("h2").textContent = "Science Categories";
      
      // Create containers for each category
      ["physics", "chemistry", "biology"].forEach(category => {
        const categoryContainer = document.createElement("div");
        categoryContainer.className = "category-container";
        
        // Category header (always visible)
        const categoryHeader = document.createElement("div");
        categoryHeader.className = "category-header";
        categoryHeader.innerHTML = `
          <div class="category-name">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
          <div class="category-arrow">
            <i class="fas fa-chevron-${selectedSubjectCategory === category ? 'down' : 'right'}"></i>
          </div>
        `;
        
        // Chapters container (collapsible)
        const chaptersContainer = document.createElement("div");
        chaptersContainer.className = `chapters-container ${selectedSubjectCategory === category ? 'open' : ''}`;
        
        // Add chapters if this category is open
        if (selectedSubjectCategory === category) {
          subjects[subject][category].forEach(chapter => {
            const chapterRow = document.createElement("div");
            chapterRow.className = "chapter-row";
            
            const isCompleted = isChapterCompleted(subject, chapter);
            
            chapterRow.innerHTML = `
              <input type="checkbox" class="chapter-checkbox-main" 
                     data-subject="${subject}" data-chapter="${chapter}"
                     ${isCompleted ? 'checked' : ''}>
              <div class="chapter-name">${chapter}</div>
              <div class="chapter-arrow"><i class="fas fa-chevron-right"></i></div>
            `;
            
            const checkbox = chapterRow.querySelector(".chapter-checkbox-main");
            checkbox.addEventListener("click", (e) => {
              e.stopPropagation();
              updateCheckboxState(subject, chapter, checkbox.checked);
              updateSubjectProgress(subject);
              updateOverallProgress();
            });
            
            chapterRow.addEventListener("click", (e) => {
              if (e.target.classList.contains("chapter-checkbox-main")) return;
              
              chapterRow.classList.toggle("open");
              const resourceRow = document.querySelector(`.resource-row[data-subject="${subject}"][data-chapter="${chapter}"]`);
              
              if (!resourceRow) {
                createResourceRow(subject, chapter, chapterRow);
              }
            });
            
            chaptersContainer.appendChild(chapterRow);
          });
        }
        
        // Toggle click handler for category header
        categoryHeader.addEventListener("click", () => {
          if (selectedSubjectCategory === category) {
            // Clicking the same category - collapse it
            selectedSubjectCategory = null;
          } else {
            // Clicking a different category - expand it
            selectedSubjectCategory = category;
          }
          displaySubjectContent(subject); // Refresh the view
        });
        
        categoryContainer.appendChild(categoryHeader);
        categoryContainer.appendChild(chaptersContainer);
        chapterList.appendChild(categoryContainer);
      });
      return;
      // ... (existing Science implementation from previous code) ...
    }
    else if (subject === "Social Science") {
      subjectDisplay.querySelector("h2").textContent = "Social Science Categories";
      
      // Create containers for each category
      ["history", "geography", "politicalScience", "economics"].forEach(category => {
        const categoryContainer = document.createElement("div");
        categoryContainer.className = "category-container";
        
        // Category header (always visible)
        const categoryHeader = document.createElement("div");
        categoryHeader.className = "category-header";
        categoryHeader.innerHTML = `
          <div class="category-name">${formatCategoryName(category)}</div>
          <div class="category-arrow">
            <i class="fas fa-chevron-${selectedSubjectCategory === category ? 'down' : 'right'}"></i>
          </div>
        `;
        
        // Chapters container (collapsible)
        const chaptersContainer = document.createElement("div");
        chaptersContainer.className = `chapters-container ${selectedSubjectCategory === category ? 'open' : ''}`;
        
        // Add chapters if this category is open
        if (selectedSubjectCategory === category) {
          subjects[subject][category].forEach(chapter => {
            createChapterRow(subject, chapter, chaptersContainer);
          });
        }
        
        // Toggle click handler
        categoryHeader.addEventListener("click", () => {
          selectedSubjectCategory = selectedSubjectCategory === category ? null : category;
          displaySubjectContent(subject);
        });
        
        categoryContainer.appendChild(categoryHeader);
        categoryContainer.appendChild(chaptersContainer);
        chapterList.appendChild(categoryContainer);
      });
    }
    else if (subject === "English") {
      subjectDisplay.querySelector("h2").textContent = "English Books";
      
      // Create containers for each book
      Object.keys(subjects[subject].books).forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.className = "category-container";
        
        // Book header (always visible)
        const bookHeader = document.createElement("div");
        bookHeader.className = "category-header";
        bookHeader.innerHTML = `
          <div class="category-name">${book}</div>
          <div class="category-arrow">
            <i class="fas fa-chevron-${selectedBook === book ? 'down' : 'right'}"></i>
          </div>
        `;
        
        // Chapters container (collapsible)
        const chaptersContainer = document.createElement("div");
        chaptersContainer.className = `chapters-container ${selectedBook === book ? 'open' : ''}`;
        
        // Add chapters if this book is open
        if (selectedBook === book) {
          subjects[subject].books[book].forEach(chapter => {
            createChapterRow(subject, chapter, chaptersContainer);
          });
        }
        
        // Toggle click handler
        bookHeader.addEventListener("click", () => {
          selectedBook = selectedBook === book ? null : book;
          displaySubjectContent(subject);
        });
        
        bookContainer.appendChild(bookHeader);
        bookContainer.appendChild(chaptersContainer);
        chapterList.appendChild(bookContainer);
      });
    }
    else {
      // Default handling for Mathematics, Hindi, etc.
      subjectDisplay.querySelector("h2").textContent = `${subject} Chapters`;
      subjects[subject].chapters.forEach(chapter => {
        createChapterRow(subject, chapter, chapterList);
      });
    }
  }
  
  // Helper function to create chapter rows
  function createChapterRow(subject, chapter, container) {
    const chapterRow = document.createElement("div");
    chapterRow.className = "chapter-row";
    
    const isCompleted = isChapterCompleted(subject, chapter);
    
    chapterRow.innerHTML = `
      <input type="checkbox" class="chapter-checkbox-main" 
             data-subject="${subject}" data-chapter="${chapter}"
             ${isCompleted ? 'checked' : ''}>
      <div class="chapter-name">${chapter}</div>
      <div class="chapter-arrow"><i class="fas fa-chevron-right"></i></div>
    `;
    
    const checkbox = chapterRow.querySelector(".chapter-checkbox-main");
    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();
      updateCheckboxState(subject, chapter, checkbox.checked);
      updateSubjectProgress(subject);
      updateOverallProgress();
    });
    
    chapterRow.addEventListener("click", (e) => {
      if (e.target.classList.contains("chapter-checkbox-main")) return;
      
      chapterRow.classList.toggle("open");
      const resourceRow = document.querySelector(`.resource-row[data-subject="${subject}"][data-chapter="${chapter}"]`);
      
      if (!resourceRow) {
        createResourceRow(subject, chapter, chapterRow);
      }
    });
    
    container.appendChild(chapterRow);
  }
  
  // Helper function to format category names
  function formatCategoryName(category) {
    const names = {
      history: "History",
      geography: "Geography",
      politicalScience: "Political Science",
      economics: "Economics"
    };
    return names[category] || category;
  }

// Helper function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper to find chapter in main content
function scrollToChapterInMain(chapterName) {
  const chapterRows = document.querySelectorAll('.chapter-name');
  for (let row of chapterRows) {
    if (row.textContent.includes(chapterName)) {
      row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      break;
    }
  }
}
  
  // Helper function to create chapter rows
// Previous code remains the same until the createChapterRow function

// ================ CREATE CHAPTER ROW ================
function createChapterRow(subject, chapter, container) {
  const chapterRow = document.createElement("div");
  chapterRow.className = "chapter-row";
  
  const isCompleted = isChapterCompleted(subject, chapter);
  
  chapterRow.innerHTML = `
    <input type="checkbox" class="chapter-checkbox-main" 
           data-subject="${subject}" data-chapter="${chapter}"
           ${isCompleted ? 'checked' : ''}>
    <div class="chapter-name">${chapter}</div>
    <div class="chapter-arrow"><i class="fas fa-chevron-right"></i></div>
  `;
  
  const checkbox = chapterRow.querySelector(".chapter-checkbox-main");
  checkbox.addEventListener("click", (e) => {
    e.stopPropagation();
    updateCheckboxState(subject, chapter, checkbox.checked);
    updateSubjectProgress(subject);
    updateOverallProgress();
  });
  
  chapterRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("chapter-checkbox-main")) return;
    
    // Toggle the open class
    chapterRow.classList.toggle("open");
    
    // Check if resource row already exists
    let resourceRow = chapterRow.nextElementSibling;
    
    if (!resourceRow || !resourceRow.classList.contains("resource-row")) {
      // Create new resource row if it doesn't exist
      createResourceRow(subject, chapter, chapterRow);
    } else {
      // Toggle visibility of existing resource row
      resourceRow.style.display = chapterRow.classList.contains("open") ? "flex" : "none";
    }
    
    // Rotate arrow
    const arrow = chapterRow.querySelector(".chapter-arrow i");
    arrow.classList.toggle("fa-chevron-right");
    arrow.classList.toggle("fa-chevron-down");
  });
  
  container.appendChild(chapterRow);
}

// ================ CREATE RESOURCE ROW ================
function createResourceRow(subject, chapter, chapterRow) {
  const resourceRow = document.createElement("div");
  resourceRow.className = "resource-row";
  resourceRow.setAttribute("data-subject", subject);
  resourceRow.setAttribute("data-chapter", chapter);
  
  if (!chapterRow.classList.contains("open")) {
      resourceRow.style.display = "none";
  }
  
  // Video Resources
  const videoItem = document.createElement("div");
  videoItem.className = "resource-item";
  videoItem.innerHTML = `
    <div class="resource-icon"><i class="fas fa-video"></i></div>
    <div class="resource-title">Video Lectures</div>
    <a href="https://youtube.com/results?search_query=${encodeURIComponent(subject + ' ' + chapter + ' class 10 ncert')}" 
       target="_blank" class="resource-btn">Watch</a>
  `;
  resourceRow.appendChild(videoItem);

  // Study Material
  const materialItem = document.createElement("div");
  materialItem.className = "resource-item";
  materialItem.innerHTML = `
    <div class="resource-icon"><i class="fas fa-book"></i></div>
    <div class="resource-title">Study Material</div>
    <a href="https://www.google.com/search?q=${encodeURIComponent(subject + ' ' + chapter + ' notes pdf class 10')}" 
       target="_blank" class="resource-btn">Download</a>
  `;
  resourceRow.appendChild(materialItem);

  // Recommended Books - Collapsible Section
  const booksItem = document.createElement("div");
  booksItem.className = "resource-item collapsible";
  
  // Get the books for this subject
  let subjectBooks = [];
  if (subject === "English") {
    subjectBooks = subjects[subject].booksList;
  } else if (subject === "Social Science") {
    subjectBooks = subjects[subject].booksList;
  } else {
    subjectBooks = subjects[subject].books || [];
  }
  
  booksItem.innerHTML = `
    <div class="resource-icon"><i class="fas fa-book-open"></i></div>
    <div class="resource-title">Recommended Books</div>
    <div class="chapter-arrow"><i class="fas fa-chevron-right"></i></div>
    <div class="books-content hidden">
      ${subjectBooks.map(book => 
        `<div class="book-item">
          <div class="resource-icon"><i class="fas fa-book"></i></div>
          <div class="resource-title">${book.name}</div>
          <a href="${book.link}" target="_blank" class="resource-btn">View</a>
        </div>`
      ).join("")}
    </div>
  `;
  
  // Add click event to toggle books
  booksItem.addEventListener("click", function(e) {
    if (!e.target.classList.contains("resource-btn")) {
      const arrow = this.querySelector(".chapter-arrow i");
      const content = this.querySelector(".books-content");
      
      arrow.classList.toggle("fa-chevron-right");
      arrow.classList.toggle("fa-chevron-down");
      content.classList.toggle("hidden");
    }
  });
  
  resourceRow.appendChild(booksItem);

  // PYQs
  const pyqItem = document.createElement("div");
  pyqItem.className = "resource-item";
  pyqItem.innerHTML = `
    <div class="resource-icon"><i class="fas fa-file-alt"></i></div>
    <div class="resource-title">Previous Year Questions</div>
    <a href="https://www.google.com/search?q=${encodeURIComponent(subject + ' ' + chapter + ' previous year questions class 10')}" 
       target="_blank" class="resource-btn">Practice</a>
  `;
  resourceRow.appendChild(pyqItem);

  // Questions to Revise
  const reviseItem = document.createElement("div");
  reviseItem.className = "resource-item";
  reviseItem.innerHTML = `
    <div class="resource-icon"><i class="fas fa-question-circle"></i></div>
    <div class="resource-title">Questions to Revise</div>
    <a href="https://www.google.com/search?q=${encodeURIComponent(subject + ' ' + chapter + ' important questions class 10')}" 
       target="_blank" class="resource-btn">View</a>
  `;
  resourceRow.appendChild(reviseItem);

  // Important Questions
  const importantItem = document.createElement("div");
  importantItem.className = "resource-item";
  importantItem.innerHTML = `
    <div class="resource-icon"><i class="fas fa-star"></i></div>
    <div class="resource-title">Important Questions</div>
    <a href="https://www.google.com/search?q=${encodeURIComponent(subject + ' ' + chapter + ' most important questions class 10')}" 
       target="_blank" class="resource-btn">View</a>
  `;
  resourceRow.appendChild(importantItem);

  // Insert after the chapter row
  chapterRow.parentNode.insertBefore(resourceRow, chapterRow.nextSibling);
}

// Rest of the JavaScript remains the same

// ================ SHOW ANALYTICS ================
function showAnalytics() {
  if (selectedSubject) {
    subjectDisplay.classList.add("hidden");
    subjectProgressContainer.classList.add("hidden");
  }
  analyticsDisplay.classList.remove("hidden");
  
  // Calculate and display analytics data
  updateAnalyticsData();
}

// ================ UPDATE ANALYTICS DATA ================
function updateAnalyticsData() {
  // Calculate progress for each subject
  Object.keys(subjects).forEach(subject => {
    const progress = calculateSubjectProgress(subject);
    document.getElementById(`${subject.toLowerCase()}Progress`).textContent = `${progress}%`;
    document.getElementById(`${subject.toLowerCase()}ProgressFill`).style.width = `${progress}%`;
  });
  
  // Generate some sample analytics data
  document.getElementById("studyTime").textContent = "Evening (4PM-8PM)";
  document.getElementById("studyDuration").textContent = "2 hours 15 minutes";
  
  // Find the subject with highest progress
  let maxProgress = 0;
  let topSubject = "None";
  Object.keys(subjects).forEach(subject => {
    const progress = calculateSubjectProgress(subject);
    if (progress > maxProgress) {
      maxProgress = progress;
      topSubject = subject;
    }
  });
  document.getElementById("topSubject").textContent = topSubject;
  
  // Update overall progress in analytics
  const overallProgress = calculateOverallProgress();
  document.getElementById("overallProgressText").textContent = `${overallProgress}% Complete`;
  mainProgressFill.style.width = `${overallProgress}%`;
}

// ================ CHECKBOX STATE MANAGEMENT ================
function updateCheckboxState(subject, chapter, isChecked) {
  localStorage.setItem(`chapter-${subject}-${chapter}`, isChecked ? "completed" : "");
}

function isChapterCompleted(subject, chapter) {
  return localStorage.getItem(`chapter-${subject}-${chapter}`) === "completed";
}

function updateMainCheckbox(subject, chapter, isChecked) {
  const checkbox = document.querySelector(`.chapter-checkbox-main[data-subject="${subject}"][data-chapter="${chapter}"]`);
  if (checkbox) {
    checkbox.checked = isChecked;
  }
}

// ================ PROGRESS CALCULATION ================
function calculateSubjectProgress(subject) {
  let chapters = [];
  
  if (subject === "Science") {
    chapters = [
      ...subjects[subject].physics,
      ...subjects[subject].chemistry,
      ...subjects[subject].biology
    ];
  } else if (subject === "Social Science") {
    chapters = [
      ...subjects[subject].history,
      ...subjects[subject].geography,
      ...subjects[subject].politicalScience,
      ...subjects[subject].economics
    ];
  } else if (subject === "English") {
    chapters = [
      ...subjects[subject].books["First Flight"],
      ...subjects[subject].books["Footprints Without Feet"]
    ];
  } else if (subject === "Hindi") {
    chapters = subjects[subject].chapters;
  } else {
    chapters = subjects[subject].chapters || [];
  }
  
  if (chapters.length === 0) return 0;
  
  let completed = 0;
  chapters.forEach(chapter => {
    if (isChapterCompleted(subject, chapter)) {
      completed++;
    }
  });
  
  return Math.round((completed / chapters.length) * 100);
}

function calculateOverallProgress() {
  let totalChapters = 0;
  let completedChapters = 0;
  
  Object.keys(subjects).forEach(subject => {
    let chapters = [];
    
    if (subject === "Science") {
      chapters = [
        ...subjects[subject].physics,
        ...subjects[subject].chemistry,
        ...subjects[subject].biology
      ];
    } else if (subject === "Social Science") {
      chapters = [
        ...subjects[subject].history,
        ...subjects[subject].geography,
        ...subjects[subject].politicalScience,
        ...subjects[subject].economics
      ];
    } else if (subject === "English") {
      chapters = [
        ...subjects[subject].books["First Flight"],
        ...subjects[subject].books["Footprints Without Feet"]
      ];
    } else if (subject === "Hindi") {
      chapters = subjects[subject].chapters;
    } else {
      chapters = subjects[subject].chapters || [];
    }
    
    chapters.forEach(chapter => {
      totalChapters++;
      if (isChapterCompleted(subject, chapter)) {
        completedChapters++;
      }
    });
  });
  
  return totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
}

function updateSubjectProgress(subject) {
  const progress = calculateSubjectProgress(subject);
  
  // Update in sidebar
  const progressText = document.getElementById(`progressText-${subject}`);
  const progressFill = document.getElementById(`progressFill-${subject}`);
  
  if (progressText && progressFill) {
    progressText.textContent = `${progress}%`;
    progressFill.style.width = `${progress}%`;
  }
  
  // Update in main content if this is the selected subject
  if (subject === selectedSubject) {
    subjectProgressText.textContent = `${progress}% Complete`;
    subjectProgressFill.style.width = `${progress}%`;
  }
}

function updateOverallProgress() {
  const progress = calculateOverallProgress();
  overallProgressText.textContent = `${progress}% Complete`;
  mainProgressFill.style.width = `${progress}%`;
  
  // Also update analytics if visible
  if (!analyticsDisplay.classList.contains("hidden")) {
    updateAnalyticsData();
  }
}

// ================ INITIALIZE ================
renderSubjects();

// Calculate initial progress for all subjects
Object.keys(subjects).forEach(subject => {
  updateSubjectProgress(subject);
});
updateOverallProgress();