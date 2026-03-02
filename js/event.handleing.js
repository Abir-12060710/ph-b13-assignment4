document.addEventListener("DOMContentLoaded", function () {
    resetButtons();
    document.getElementById("nav-btn-1").classList.remove("bg-white", "border-2", "border-[#F1F2F4]", "text-[#64748B]");
    document.getElementById("nav-btn-1").classList.add("bg-[#3B82F6]", "text-white");
    const allSectionJobs = parseInt(document.getElementById("card-info-1").innerText);
    if (allSectionJobs === 0) {
        document.getElementById("job-cards").classList.add("hidden");
        document.getElementById("empty-section").classList.remove("hidden");
    }
    else {
        document.getElementById("job-cards").classList.remove("hidden");
        document.getElementById("empty-section").classList.add("hidden");
    }

});
// All Button
document.getElementById("nav-btn-1").addEventListener("click", function () {
    tabBtnActive("nav-btn-1");
    document.getElementById("job-cards").classList.remove("hidden"); // সব জব দেখাবে
    document.getElementById("interviwed").classList.add("hidden");   // ইন্টারভিউ লুকাবে
    document.getElementById("rejected").classList.add("hidden");     // রিজেক্টেড লুকাবে
    document.getElementById("empty-section").classList.add("hidden");
});

// Interview Button
document.getElementById("nav-btn-2").addEventListener("click", function () {
    tabBtnActive("nav-btn-2");
    document.getElementById("job-cards").classList.add("hidden"); // মেইন লিস্ট লুকাবে
    document.getElementById("rejected").classList.add("hidden");
    
    let interviewCount = parseInt(document.getElementById("card-info-2").innerText);
    if (interviewCount === 0) {
        document.getElementById("interviwed").classList.add("hidden");
        document.getElementById("empty-section").classList.remove("hidden");
    } else {
        document.getElementById("interviwed").classList.remove("hidden"); // শুধু ইন্টারভিউ লিস্ট দেখাবে
        document.getElementById("empty-section").classList.add("hidden");
    }
});

// Rejected Button
document.getElementById("nav-btn-3").addEventListener("click", function () {
    tabBtnActive("nav-btn-3");
    
    document.getElementById("job-cards").classList.add("hidden");
    document.getElementById("interviwed").classList.add("hidden");
    
    let rejectedCount = parseInt(document.getElementById("card-info-3").innerText);
    if (rejectedCount === 0) {
        document.getElementById("rejected").classList.add("hidden");
        document.getElementById("empty-section").classList.remove("hidden");
    } else {
        document.getElementById("rejected").classList.remove("hidden"); // শুধু রিজেক্টেড লিস্ট দেখাবে
        document.getElementById("empty-section").classList.add("hidden");
    }
});