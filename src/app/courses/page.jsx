export default function Courses() {
  const courses = [
    { name: "Deep Learning - Bootcamp (Mentor)", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    { name: "AI Summer Camp - Bootcamp", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    { name: "Python for Machine Learning", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    { name: "Introduction to Machine Learning", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    { name: "Introduction to Deep Learning", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    { name: "Introduction to Python", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    { name: "Makine Öğrenmesine Giriş", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", org: "Global AI Hub" },
    {
      name: "50+ Saat Tüm Yönleriyle Python 3 Programlama (2022)",
      org: "Udemy",
    },
    { name: "Yapay Zeka ve Veri Bilimi için Python Programlama", org: "Udemy" },
    { name: "Makine Öğrenmesi 101", org: "Turkcell Geleceği Yazanlar" },
    { name: "Makine Öğrenmesi 202", org: "Turkcell Geleceği Yazanlarrrr" },
    { name: "Makine Öğrenmesi 202", org: "Turkcell Geleceği Yazanlarrrr" },
  ];

  // Kuruluşlara göre kursları gruplamak için bir obje oluşturun
  const coursesByOrganization = courses.reduce((acc, course) => {
    if (!acc[course.org]) {
      acc[course.org] = [];
    }
    acc[course.org].push(course);
    return acc;
  }, {});

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      {Object.keys(coursesByOrganization).map((orgName) => (
        <div  className="bg-slate-200" key={orgName}>
          <h1 className="font-bold">{orgName}</h1>
          <ul>
            {coursesByOrganization[orgName].map((course, index) => (
              <li key={index}>{course.name}
              <li className="hidden">
              {course.desc}</li></li>
              
            ))}
            
          </ul>
          <p>Note: *Clicking on the certificate goes to the address containing the document.</p>
        </div>
      ))}
    </div>
  );
}