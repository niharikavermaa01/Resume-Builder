document.addEventListener('DOMContentLoaded', () => {
    const resumeData = {};
    // --- Name Section ---
    const btn1 = document.querySelector(".btn1");
    const p1 = document.querySelector(".added1");
    const input1 = document.querySelector("#textarea1");
    const p1_1 = document.querySelector(".added1-1");
    const input1_1 = document.querySelector("#textarea1-1");

    btn1.addEventListener("click", () => {
        p1.innerText = `Added: ${input1.value}`;
        p1_1.innerText = `Added: ${input1_1.value}`;
        resumeData.name = input1.value;
        resumeData.Job_title = input1_1.value;
        input1.value = "";
        input1_1.value = "";
        console.log("Updated Resume Data:", resumeData);
    });

    // --- Contact Section ---
    const btn2 = document.querySelector(".btn2");
    const p2 = document.querySelector(".added2");
    const input2 = document.querySelector("#textarea2");

    const p2_1 = document.querySelector(".added2-1");
    const input2_1 = document.querySelector("#textarea2-1");

     const p2_2 = document.querySelector(".added2-2");
    const input2_2 = document.querySelector("#textarea2-2");

    btn2.addEventListener("click", () => {
        p2.innerText = `Added: ${input2.value}`;
         p2_1.innerText = `Added: ${input2_1.value}`;
         p2_2.innerText = `Added: ${input2_2.value}`;

        resumeData.contact = input2.value;
        resumeData.email = input2_1.value;
         resumeData.linkedin = input2_2.value;

        input2.value = "";
         input2_1.value = "";
          input2_2.value = "";
        console.log("Updated Resume Data:", resumeData);
    });


    // ===== UPDATED: Skills Section =====
const btn3 = document.querySelector(".btn3");
const p3 = document.querySelector(".added3");
const input3 = document.querySelector("#textarea3");

btn3.addEventListener("click", () => {
    const skillsString = input3.value;
    const skillsArray = skillsString.split(',').map(skill => skill.trim());
    resumeData.skills = skillsArray; 
    p3.innerText = `Added: ${skillsArray.length} skills`;
    input3.value = "";
    console.log("Updated Resume Data:", resumeData);
});
    
    // --- Professional Experience Section ---
    const btn4 = document.querySelector(".btn4");
    const p4 = document.querySelector(".added4");
    const input4 = document.querySelector("#textarea4");

    btn4.addEventListener("click", () => {
        p4.innerText = `Added: ${input4.value}`;
        resumeData.experience = input4.value; // Stored as 'experience'
        input4.value = "";
        console.log("Updated Resume Data:", resumeData);
    });

    // --- Projects and Awards Section ---
    const btn5 = document.querySelector(".btn5");
    const p5 = document.querySelector(".added5");
    const input5 = document.querySelector("#textarea5");

    btn5.addEventListener("click", () => {
        p5.innerText = `Added: ${input5.value}`;
        resumeData.projectsAwards = input5.value; // Stored as 'projectsAwards'
        input5.value = "";
        console.log("Updated Resume Data:", resumeData);
    });

    // EDucation section

    
const btn6 = document.querySelector(".btn6");
const p6 = document.querySelector(".added6");
const input6 = document.querySelector("#textarea6");

const p6_1 = document.querySelector(".added6-1");
const input6_1 = document.querySelector("#textarea6-1");

const p6_2 = document.querySelector(".added6-2");
const input6_2 = document.querySelector("#textarea6-2");

btn6.addEventListener("click", () => {
       p6.innerText = `Added: ${input6.value}`;
         p6_1.innerText = `Added: ${input6_1.value}`;
         p6_2.innerText = `Added: ${input6_2.value}`;

        resumeData.degree = input6.value;
        resumeData.university = input6_1.value;
         resumeData.year = input6_2.value;

        input6.value = "";
         input6_1.value = "";
          input6_2.value = "";
        console.log("Updated Resume Data:", resumeData);
    });

    // --- Final Form Submission ---
    const resumeForm = document.querySelector("#resume-form");
    const hiddenDataInput = document.querySelector("#resume-data-hidden");
    
    resumeForm.addEventListener("submit", (event) => {
        // Convert the final resumeData object to a JSON string
        hiddenDataInput.value = JSON.stringify(resumeData);
        // The form will now submit with all the data
    });
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const resume = document.getElementById("resume");

    const options = {
      margin:       0.5,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(resume).save();
  });
