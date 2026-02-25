
const interactionBtns = document.querySelectorAll(".interaction-btn");

for (const btn of interactionBtns) {
    btn.addEventListener("click", function () {
        for (const b of interactionBtns) {
            b.classList.remove("bg-[#3B82F6]","text-white");

            b.classList.add(
                "bg-white", "border-2", "border-[#F1F2F4]", "text-[#64748B]");
        }

        
        btn.classList.remove("bg-white","border-2","border-[#F1F2F4]","text-[#64748B]");
        btn.classList.add("bg-[#3B82F6]","text-white");
    });
}
