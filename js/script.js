let mainCont = document.getElementById("main-cont");

mainCont.addEventListener("click", function (event) {
    const target = event.target;
    const parentCard = target.closest(".jobcard");
    

    // activity for interview btn 
    if (target.classList.contains("interview-btn")) {
        // if the card is already in interview section check
        if (parentCard.classList.contains("is-interviewed")) {
            return
        };

        let jobStatus = parentCard.querySelector(".job-status");
        jobStatus.innerText = "Interviewed";
        jobStatus.classList.remove("bg-[#EEF4FF]",  "text-[#002C5C]", "border-[#EF4444]",  "text-[#EF4444]");
        jobStatus.classList.add("border-2", "border-[#10B981]",  "text-[#10B981]", "interview-selected");
        
        // counter update for interview section 
        let countEl = document.getElementById("card-info-2");
        countEl.innerText = parseInt(countEl.innerText) + 1;

        // clone it to interview section 
        const interviewTab = document.getElementById("interviwed");
        let clonedCard = parentCard.cloneNode(true);

        parentCard.classList.add("is-interviewed"); 
        interviewTab.appendChild(clonedCard);
    }

    // activity for reject btn 
    else if (target.classList.contains("rejected-btn")) {
        // if the card is already in rejected section check
        if (parentCard.classList.contains("is-rejected")) {
            return
        };

        let jobStatus = parentCard.querySelector(".job-status");
        jobStatus.innerText = "Rejected";
        jobStatus.classList.remove("bg-[#EEF4FF]",  "text-[#002C5C]", "border-[#10B981]",  "text-[#10B981]");
        jobStatus.classList.add("border-2", "border-[#EF4444]",  "text-[#EF4444]", "rejected-selected");

        // counter update for rejection 
        let countEl = document.getElementById("card-info-3");
        countEl.innerText = parseInt(countEl.innerText) + 1;

        // clone it to rejected sectoin 
        const rejectedTab = document.getElementById("rejected");
        let clonedCard = parentCard.cloneNode(true);
        
        parentCard.classList.add("is-rejected");
        rejectedTab.appendChild(clonedCard);
    }

    // activity of delete function 
    else if (target.classList.contains("dlt-btn")) {
        // checking from where dlt btn is being pressed 
        const isInInterviewSection = target.closest("#interviwed");
        const isInRejectedSection = target.closest("#rejected");
        const isInMainSection = target.closest("#job-cards");

        parentCard.remove();

        // if delete btn is pressed from main section 
        if (isInMainSection) {
            let totalJobsEl = document.getElementById("card-info-1");
            let currentTotal = parseInt(totalJobsEl.innerText) - 1;
            totalJobsEl.innerText = currentTotal;
            document.getElementById("jobs-num").innerText = currentTotal;

            if (currentTotal === 0) {
                document.getElementById("job-cards").classList.add("hidden");
                document.getElementById("empty-section").classList.remove("hidden");
            }
        } 
        // if delete button is pressed from interviewsection 
        else if (isInInterviewSection) {
            let countEl = document.getElementById("card-info-2");
            countEl.innerText = Math.max(0, parseInt(countEl.innerText) - 1);
        }
        // if delete btn is pressed from reject section 
        else if (isInRejectedSection) {
            let countEl = document.getElementById("card-info-3");
            countEl.innerText = Math.max(0, parseInt(countEl.innerText) - 1);
        }
    }
});