// calculate the Triangle Area 
function calculateTriangleArea(){
    //get triangle base
    const baseField= document.getElementById('triangle-base');
    const baseValueText= baseField.value;
    const base= parseFloat(baseValueText)
    console.log(`Base: ${base}`);
    //get triangle height
    const heightField= document.getElementById('triangle-height');
    const heightValueText= heightField.value;
    const height= parseFloat(heightValueText)
    console.log(`Height: ${height}`);
    // calculate triangle area
     const area= 0.5*base*height;
     console.log(`Area of Triangle: ${area}`);
    //set triangle area
    const triangleArea= document.getElementById('triangle-area');
    triangleArea.innerText= area;  
}
// calculate the rectangle area
function calculateRectangleArea(){
    //get rectangle width
    const widthField= document.getElementById('rectangle-width');
    const widthValueText= widthField.value;
    const width= parseFloat(widthValueText)
    console.log(`Width: ${width}`);
    //get rectangle length
    const lengthField= document.getElementById('rectangle-length');
    const lengthValueText= lengthField.value;
    const length= parseFloat(lengthValueText)
    console.log(`Length: ${length}`);
    // calculate rectangle area
     const area= width*length;
     console.log(`Area of rectangle: ${area}`);
    //set rectangle area
    const rectangleArea= document.getElementById('rectangle-area');
    rectangleArea.innerText= area;  
}
// calculate the Parallelogram area
function calculateParallelogramArea(){
    //get parallelogram base
    const baseField= document.getElementById('parallelogram-base');
    const baseValueText= baseField.value;
    const base= parseFloat(baseValueText)
    console.log(`Base: ${base}`);
    //get parallelogram height
    const heightField= document.getElementById('parallelogram-height');
    const heightValueText= heightField.value;
    const height= parseFloat(heightValueText)
    console.log(`Height: ${height}`);
    // calculate parallelogram area
     const area= base*height;
     console.log(`Area of parallelogram: ${area}`);
    //set parallelogram area
    const parallelogramArea= document.getElementById('parallelogram-area');
    parallelogramArea.innerText= area;  
}