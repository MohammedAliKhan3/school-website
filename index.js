const express = require('express');
const path = require('path');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home Page
app.get('/', (req, res) => {
  res.render('home', {
    page: 'home',
    heroTitle: "Welcome to Moral Merry School",
    heroSubtitle: "Where excellence meets innovation",
    features: [
      { 
        title: "Academic Excellence", 
        icon: "📚", 
        description: "Top-ranked curriculum with 98% college acceptance rate" 
      },
      { 
        title: "Sports Programs", 
        icon: "⚽", 
        description: "State championship teams in 8 different sports" 
      },
      { 
        title: "Arts Education", 
        icon: "🎨", 
        description: "Award-winning visual and performing arts programs" 
      }
    ],
    news: [
      {
        title: "Science Fair Winners",
        date: "May 15, 2023",
        excerpt: "Our students won 3 gold medals at the state science fair"
      },
      {
        title: "New Campus Expansion",
        date: "April 28, 2023",
        excerpt: "Construction begins on our new STEM innovation center"
      }
    ],
    stats: [
      { value: "98%", label: "College Acceptance" },
      { value: "25", label: "AP Courses" },
      { value: "1:10", label: "Teacher Ratio" },
      { value: "50+", label: "Clubs & Activities" }
    ],
    campusImages: [
      {
        src: "/images/campus1.jpg",
        alt: "Main academic building",
        caption: "Our state-of-the-art academic center"
      },
      {
        src: "/images/campus2.jpg",
        alt: "Sports facilities",
        caption: "Olympic-sized swimming pool and track"
      },
      {
        src: "/images/campus3.jpg",
        alt: "Library",
        caption: "Award-winning library with 50,000 volumes"
      }
    ]
  });
});

// About Page
app.get('/about', (req, res) => {
  res.render('about', {
    page: 'about',
    mission: "To empower students through innovative learning experiences that foster intellectual curiosity, creativity, and character development.",
    stats: [
      { value: "98%", label: "Graduation Rate" },
      { value: "25+", label: "AP Courses" },
      { value: "1:12", label: "Teacher Ratio" },
      { value: "50+", label: "Clubs & Activities" }
    ],
    faculty: [
      {
        name: "Sir Abdul Akbar Khan",
        position: "Principal",
        bio: "20+ years in educational leadership with a PhD in Curriculum Development",
        image: "principal.jpg"
      },
      {
        name: "Michael Chen",
        position: "Dean of Academics",
        bio: "Specialist in STEM education and former NASA educator",
        image: "dean.jpg"
      }
    ]
  });
});

// Admissions Page
app.get('/admissions', (req, res) => {
  res.render('admissions', {
    page: 'admissions',
    steps: [
      { number: "01", title: "Application", description: "Submit online application form" },
      { number: "02", title: "Assessment", description: "Complete academic evaluation" },
      { number: "03", title: "Interview", description: "Family interview with admissions team" },
      { number: "04", title: "Decision", description: "Receive admission decision" }
    ],
    deadlines: [
      { term: "Fall 2025", date: "January 15, 2025", status: "Open" },
      { term: "Spring 2025", date: "October 1, 2025", status: "Open" }
    ],
    tuition: [
      { grade: "K-5", amount: "₹10K" },
      { grade: "6-8", amount: "₹11K" },
      { grade: "9-12", amount: "₹12K" }
    ]
  });
});

// Programs Page
app.get('/programs', (req, res) => {
  res.render('programs', {
    page: 'programs',
    programs: [
      {
        name: "STEM Academy",
        description: "Advanced science, technology, engineering and math program",
        image: "stem.jpg",
        grades: "6-12"
      },
      {
        name: "International Baccalaureate",
        description: "World-renowned IB diploma program",
        image: "ib.jpg",
        grades: "11-12"
      },
      {
        name: "Arts Conservatory",
        description: "Pre-professional arts training",
        image: "arts.jpg",
        grades: "9-12"
      }
    ]
  });
});

// News Page
app.get('/news', (req, res) => {
  res.render('news', {
    page: 'news',
    articles: [
      {
        title: "Planting Trees Drive",
        date: "May, 2025",
        image: "plantingTrees.png",
        excerpt: "Our team and students are dedicated to plant 100 trees!",
        category: "Achievements"
      },
      {
        title: "New Environmental Program",
        date: "May 22, 2023",
        image: "newsPaper.png",
        excerpt: "Partnership with the Nature Conservancy",
        category: "Academics"
      }
    ]
  });
});

// Contact Page
app.get('/contact', (req, res) => {
  res.render('contact', {
    page: 'contact',
    departments: [
      { name: "Admissions", email: "admissions@greenwood.edu", phone: "(555) 123-4567" },
      { name: "Academic Office", email: "academics@greenwood.edu", phone: "(555) 123-4568" }
    ],
    hours: [
      { day: "Monday-Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 12:00 PM" }
    ]
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});