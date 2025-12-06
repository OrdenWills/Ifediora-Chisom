// --- TAB FUNCTIONALITY ---
function openTab(tabName) {
    // 1. Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    // 2. Remove "active" class from all tab buttons
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // 3. Show the specific tab content
    document.getElementById(tabName).classList.add("active-content");

    // 4. Add "active" class to the clicked button (finding it by event logic involves passing event, but simplest way is searching by text or index. 
    // Easier way here: The button that called this function should be styled. 
    // We will loop through buttons and check the onclick attribute to match, 
    // or simply use event.currentTarget if we passed the event.)
    
    // Simpler approach for this specific setup:
    if(tabName === 'projects') {
        tabBtns[0].classList.add("active");
    } else {
        tabBtns[1].classList.add("active");
    }
}

// --- SLIDER FUNCTIONALITY ---
function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const scrollAmount = 320; // Approximately width of card + gap
    
    if (direction === 1) {
        slider.scrollLeft += scrollAmount;
    } else {
        slider.scrollLeft -= scrollAmount;
    }
}

// Optional: Auto-slide for testimonials if mouse isn't hovering
/*
let testimonialSlider = document.getElementById('testimonial-slider');
setInterval(() => {
    // Logic to scroll slowly
}, 3000);
*/