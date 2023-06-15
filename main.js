console.log('main.js connected')

const searchTermsInput = document.body.querySelector('#search-terms')



const getMealCategories = async () => {
    const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    try {
        const response = await fetch(mealCategoriesApiURL)
        const data = await response.json()
        const categories = await data.categories
        console.log('categories', categories)
        return categories; 
    } catch (error){
        console.log(error)
        alert('Something went wrong, try again later')
    }
   
}
//render meal categories data to dom
const renderMealCategories = (mealCategoriesObj) => {
    console.log('renderMealCategories')
    console.table(mealCategoriesObj)

    //find and select a dom element to append my data into 

    //for each element in our meal categories array
        //create a wrapping element maybe <article> class of card
        //append the article.card to selected dom element
        //display the category name, image, and description
            //image
                //create an img element
                //set img src to category thumbnail url
                //give it a mobile friendly max width of like 300px
                //appendChild the image to our card
        //name
            //create h4 element
            //set h4 element textContent to be meal category  name
            //appendChild the image to out card
        //description
            //create a p element
            //set p element textContent to be meal category descripton
            //appendChild the p to our card
}
//function to call when form input is given focus
const handleFormInputFocus = () => {
    console.log(`focus occurred`)

   getMealCategories()
}

//add event listener to search term input
searchTermsInput.addEventListener('focus', handleFormInputFocus)