// Product subcategories data
const subcategories = {
  Injections: [
    "ONCOLOGY",
    "CARDIOVASCULAR",
    "GENITOURINARY",
    "GASTROINTESTINAL",
    "LIPOSOMAL MOLECULE",
    "CNS/ANAESTHETIC & MUSCLE RELAXANT",
    "NEW MOLECULES",
    "ANTI FUNGAL",
    "NSAID'S",
    "ANTI MALARIAL",
    "ENDOCRINE",
    "PRE-FILLED SYRINGES",
    "IV FLUIDS",
    "DENTAL CARTRIDGE",
    "ANTIBIOTIC & ANTI INFECTIVE",
    "OTHER INJECTIONS",
  ],
  Tablets: [
    "ANTIBIOTIC",
    "ANTI SPASMODIC",
    "ANALGESIC & ANTIPYRETIC",
    "ANTIULCERANT",
    "ANTI HEMORRHAGIC",
    "ANTIPROTOZOAL",
    "ONCOLOGY",
    "ANTIPSYCHOTIC",
    "GYNAECOLOGY",
    "ANTIVIRAL",
    "ANTIRETROVIRAL",
    "ANTICOLD/ANTIALLERGIC/COUGH",
    "CENTRAL NERVOUS SYSTEM",
    "ERECTILE DYSFUNCTION",
    "ANTIMALARIAL & OTHER",
    "EFFERVESCENT",
    "ENZYME",
    "CARDIOVASCULAR & DIABETIC",
    "GENERAL",
    "HORMONE & STEROID",
  ],
  Capsules: [
    "ANTIBIOTIC",
    "ANTIFUNGAL",
    "ANTIMICROBIAL",
    "CARDIOVASCULAR",
    "GASTRO INTESTINAL",
    "CENTRAL NERVOUS SYSTEM",
    "GENITO URINARY",
    "LIPID LOWERING",
    "ONCOLOGY",
    "ENDOCRINE SYSTEM",
    "MUSCULO SKELETAL",
    "GENERAL",
    "NUTRITION",
  ],
  "External Preparations": [
    "OINTMENT/LOTION/CREAM & GEL",
    "EYE OINTMENT",
    "OROPHARYNGEAL PREPARATIONS & SACHETS; PRE & PROBIOTIC",
  ],
  "Suspensions & Syrups": ["ORAL LIQUID(SYRUP/SUSPENSION/SOLUTION)", "OINTMENT/LOTION/CREAM/GEL", "DRY SYRUP/SACHET"],
  "Veterinary Preparations": [
    "INJECTIONS",
    "DRY SYRUP/ORAL POWDER/LOTION",
    "TABLET/BOLUS",
    "INTRAMAMMARY INFUSION/SUSPENSION(PRE-FILLED SYRINGE)",
  ],
}

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // Increased offset to 100px to ensure section titles are fully visible
      window.scrollTo({
        top: targetElement.offsetTop - 90,
        behavior: "smooth",
      })
    }
  })
})

// Show More Products functionality
const showMoreBtn = document.getElementById("show-more-btn")
const featuredView = document.getElementById("featured-view")
const listView = document.getElementById("list-view")

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    if (featuredView.classList.contains("hidden")) {
      // Show featured view, hide list view
      featuredView.classList.remove("hidden")
      listView.classList.add("hidden")
      showMoreBtn.textContent = "Show More Products"
    } else {
      // Hide featured view, show list view
      featuredView.classList.add("hidden")
      listView.classList.remove("hidden")
      showMoreBtn.textContent = "Show Less Products"
    }
  })
}

// Featured Product overlay functionality
document.querySelectorAll(".featured-product").forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-category")
    if (subcategories[category]) {
      const list = document.getElementById("subcategory-list")
      list.innerHTML = ""
      document.getElementById("overlay-title").textContent = category
      subcategories[category].forEach((sub) => {
        const li = document.createElement("li")
        li.textContent = sub
        list.appendChild(li)
      })
      document.getElementById("overlay").classList.remove("hidden")
      document.body.classList.add("no-scroll")
    }
  })
})

// Product item overlay functionality
document.querySelectorAll(".product-item").forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-category")
    if (subcategories[category]) {
      const list = document.getElementById("subcategory-list")
      list.innerHTML = ""
      document.getElementById("overlay-title").textContent = category
      subcategories[category].forEach((sub) => {
        const li = document.createElement("li")
        li.textContent = sub
        list.appendChild(li)
      })
      document.getElementById("overlay").classList.remove("hidden")
      document.body.classList.add("no-scroll")
    }
  })
})

function closeOverlay() {
  document.getElementById("overlay").classList.add("hidden")
  document.body.classList.remove("no-scroll")
}

document.getElementById("overlay").addEventListener("click", (event) => {
  const overlayContent = document.querySelector(".overlay-content")
  if (!overlayContent.contains(event.target)) {
    closeOverlay()
  }
})

// Reveal animations on scroll
window.addEventListener("scroll", revealOnScroll)

function revealOnScroll() {
  const sections = document.querySelectorAll(".section")

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight - 150) {
      section.style.opacity = "1"
      section.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section")

  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  revealOnScroll()
})
