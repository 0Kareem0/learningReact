export default function Entry() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const entryElement = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function onSubmitEvent (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    if (newIngredient) {
    ingredients.push(newIngredient)
    console.log(ingredients);
    console.log(formData);
    console.log(newIngredient);
    }
}
  return (
    <>
      <form onSubmit={onSubmitEvent} className="add-ingredient-form" action="" >
        <input type="text" placeholder="e.g oregano" name="ingredient"/>
        <button type="submit">Add ingredient</button>
      </form>
      <ul>
        {entryElement}
      </ul>
    </>
  );
}
