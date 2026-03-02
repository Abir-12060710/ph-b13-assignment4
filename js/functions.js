function resetButtons() {
    const interactionBtns = document.querySelectorAll(".interaction-btn");
    for (const btn of interactionBtns) {
        btn.classList.remove("bg-[#3B82F6]", "text-white");
        btn.classList.add(
            "bg-white",
            "border-2",
            "border-[#F1F2F4]",
            "text-[#64748B]"
        );
    }
}
function tabBtnActive (btnID){
    resetButtons();
    document.getElementById(btnID).classList.remove("bg-white", "border-2", "border-[#F1F2F4]", "text-[#64748B]");
    document.getElementById(btnID).classList.add("bg-[#3B82F6]", "text-white");
}
