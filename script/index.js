//
const treesCatagory = document.getElementById("treesCatagory");

const loadCatagory = async () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showCategory(data.categories);
  } catch (err) {
    console.log(err);
  }
};
const showCategory = (categorise) => {
  categorise.forEach((cateory) => {
    treesCatagory.innerHTML += `
           <li id="${cateory.id}" class="p-2 rounded-md text-[#1F2937] hover:bg-[#15803D] hover:text-white hover:cursor-pointer">${cateory.category_name}</li>  
    `;
  });
};

loadCatagory();
