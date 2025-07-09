const colleges = [
  {
    name: "RV College of Engineering",
    location: "Bangalore",
    course: "Engineering",
    affiliation: "VTU",
    website: "https://rvce.edu.in",
    eligibility: "PUC Science with KCET",
    cutoff: 2500
  },
  {
    name: "PES University",
    location: "Bangalore",
    course: "Engineering",
    affiliation: "Autonomous",
    website: "https://pes.edu",
    eligibility: "PUC Science with KCET",
    cutoff: 3500
  },
  {
    name: "MS Ramaiah Institute of Technology",
    location: "Bangalore",
    course: "Engineering",
    affiliation: "VTU",
    website: "https://msrit.edu",
    eligibility: "PUC Science with KCET",
    cutoff: 4500
  },
  {
    name: "BMS College of Engineering",
    location: "Bangalore",
    course: "Engineering",
    affiliation: "VTU",
    website: "https://bmsce.ac.in",
    eligibility: "PUC Science with KCET",
    cutoff: 5000
  },
  {
    name: "New Horizon College of Engineering",
    location: "Bangalore",
    course: "Engineering",
    affiliation: "VTU",
    website: "https://newhorizonindia.edu",
    eligibility: "PUC Science with KCET",
    cutoff: 7000
  }
];

function applyFilters() {
  const course = document.getElementById("filter-course").value;
  const location = document.getElementById("filter-location").value;
  const rank = parseInt(document.getElementById("filter-rank").value);
  const results = document.getElementById("college-list");

  const filtered = colleges.filter(college => {
    const matchCourse = !course || college.course === course;
    const matchLocation = !location || college.location === location;
    const matchRank = isNaN(rank) || college.cutoff >= rank;
    return matchCourse && matchLocation && matchRank;
  });

  if (filtered.length === 0) {
    results.innerHTML = "<p>No colleges found matching your filters.</p>";
    return;
  }

  results.innerHTML = filtered.map(college => `
    <div class="card">
      <h3>${college.name}</h3>
      <p><strong>Location:</strong> ${college.location}</p>
      <p><strong>Course:</strong> ${college.course}</p>
      <p><strong>Affiliation:</strong> ${college.affiliation}</p>
      <p><strong>Eligibility:</strong> ${college.eligibility}</p>
      <p><strong>KCET Cutoff:</strong> ${college.cutoff}</p>
      <a href="${college.website}" target="_blank">Visit Website</a>
    </div>
  `).join('');
}

// Load default list on page load
document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
});
