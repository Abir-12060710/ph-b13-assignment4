console.log("script connected");

// select buttons
const interactionBtns = document.querySelectorAll(".interaction-btn");

// classes for states
const defaultClasses = ['bg-white', 'border-2', 'border-[#F1F2F4]', 'text-[#64748B]'];
const activeClasses = ['bg-[#3B82F6]', 'text-white'];

// helper to set active button and reset others
function setActiveButton(activeBtn) {
  interactionBtns.forEach(btn => {
    // reset every button to default state
    btn.classList.remove(...activeClasses);
    // ensure defaults are present (avoid duplicates)
    defaultClasses.forEach(c => {
      if (!btn.classList.contains(c)) btn.classList.add(c);
    });
    btn.setAttribute('aria-pressed', 'false');
  });

  // make clicked button active: remove defaults and add active classes
  defaultClasses.forEach(c => activeBtn.classList.remove(c));
  activeBtn.classList.add(...activeClasses);
  activeBtn.setAttribute('aria-pressed', 'true');
}

// wire up click handlers
interactionBtns.forEach(btn => {
  btn.addEventListener('click', () => setActiveButton(btn));
});

// optional: make first button active on load
if (interactionBtns.length) {
  setActiveButton(interactionBtns[0]);
}


