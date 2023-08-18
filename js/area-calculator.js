// Reusable get input value field
function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId);
    const inputValueText= inputField.value;
    const value= parseFloat(inputValueText);
    return value;
}
//Reusable set element inner text
function setElementInnerText(elementId, area){
    const element= document.getElementById(elementId);
    element.innerText= area;
}
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
    const width=getInputValue('rectangle-width');
    const length=getInputValue('rectangle-length');
    const area= width*length;
    setElementInnerText('rectangle-area', area);
  
}
// calculate the Parallelogram area
function calculateParallelogramArea(){
    const base= getInputValue('parallelogram-base');
    const height= getInputValue('parallelogram-height');
    const area= base*height;
    setElementInnerText('parallelogram-area', area);
}
// calculate the Rhombus area
function calculateRhombusArea(){
    const diagonal1= getInputValue('rhombus-diagonal1');
    const diagonal2= getInputValue('rhombus-diagonal2');
    const area= 0.5*diagonal1*diagonal2;
    setElementInnerText('rhombus-area', area);
}
// calculate the Pentagon area
function calculatePentagonArea(){
    const perimeter= getInputValue('pentagon-perimeter');
    const apothem= getInputValue('pentagon-apothem');
    const area= 0.5*perimeter*apothem;
    setElementInnerText('pentagon-area', area);
}
// calculate the Ellipse area
function calculateEllipseArea(){
    const ellipseA= getInputValue('ellipse-a');
    const ellipseB= getInputValue('ellipse-b');
    const area= 3.1416*ellipseA*ellipseB;
    setElementInnerText('ellipse-area', area);
}