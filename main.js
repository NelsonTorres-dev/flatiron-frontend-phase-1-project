console.log('main.js connected')

//get search field
const searchTermsInput = document.body.querySelector('#search-terms')

//fetch getMealCategories data from TheMealDB API
const getMealCategories = async () => {
    const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    try {
        const response = await fetch(mealCategoriesApiURL)
        const data = await response.json()
        const categories = data.categories
        console.log('categories', categories)
        return categories; 
    } catch (error){
        console.log(error)
        alert('Something went wrong, try again later')
    }
   
}
//render meal categories data to dom
const renderMealCategories = (mealCategoriesArray) => {
    console.log('renderMealCategories')
    console.table(mealCategoriesArray)

    //find and select a UL with meal categories ID dom element to append my data into 
    const mealCategoriesList = document.body.querySelector('#meal-categories-list')

    //for each element in our meal categories array
    mealCategoriesArray.forEach(mealCategory => {

        //create wrapping list item
        const mealCategoryListItem = document.createElement('li')
        mealCategoryListItem.className = 'meal-category-card'
        mealCategoriesList.appendChild(mealCategoryListItem)
        //create a wrapping element maybe <li> class of card
        //append the article.card to selected dom element
        //display the category name, image, and description
            //image
                //create an img element
                const mealCategoryImg = document.createElement('img')
                //set img src to category thumbnail url
                mealCategoryImg.src = mealCategory?.strCategoryThumb
                //give it a mobile friendly max width of like 300px
                mealCategoryImg.width = 300
                //appendChild the image to our card
                mealCategoryListItem.appendChild(mealCategoryImg)
        //name
            //create h4 element
            const mealCategoryName = document.createElement('h4')
            //set h4 element textContent to be meal category  name
            mealCategoryName.textContent = mealCategory?.strCategory
            //appendChild the image to out card
            mealCategoryListItem.appendChild(mealCategoryName)
        //description
        //create a p element
        const mealCategoryDescription = document.createElement('p')
            //set p element textContent to be meal category descripton
            mealCategoryDescription.textContent = mealCategory?.strCategoryDescription
            //appendChild the p to our card
            mealCategoryListItem.appendChild(mealCategoryDescription)
    });
    
     
}
//function to call when form input is given focus
const handleFormInputFocus = async () => {
    console.log(`focus occurred`)

    const mealCategoriesArray = await getMealCategories()
    renderMealCategories(mealCategoriesArray)

//    getMealCategories()
}

//add event listener to search term input
searchTermsInput.addEventListener('focus', handleFormInputFocus)