document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE NAVIGATION MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

}


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        // Show button after scrolling
        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                backToTop.style.display = "flex";
                backToTop.style.alignItems = "center";
                backToTop.style.justifyContent = "center";

            } else {

                backToTop.style.display = "none";

            }

        });


        // Scroll smoothly to top
        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       RESUME DOWNLOAD
    ========================= */

    const resumeDownload = document.getElementById("resumeDownload");

    if (resumeDownload) {

        resumeDownload.addEventListener("click", async function (event) {

            event.preventDefault();

            try {

                const response = await fetch("./Brindha_Resume.pdf");

                if (!response.ok) {
                    throw new Error("Resume file not found");
                }

                const blob = await response.blob();

                const url = window.URL.createObjectURL(blob);

                const downloadLink = document.createElement("a");

                downloadLink.href = url;
                downloadLink.download = "Brindha_Resume.pdf";

                document.body.appendChild(downloadLink);

                downloadLink.click();

                downloadLink.remove();

                window.URL.revokeObjectURL(url);

            } catch (error) {

                console.error("Resume download failed:", error);

                alert(
                    "Unable to download the resume. Please make sure Brindha_Resume.pdf is in the same folder as index.html."
                );

            }

        });

    }

});