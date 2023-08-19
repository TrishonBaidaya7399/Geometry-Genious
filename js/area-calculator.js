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
// Add to calculation entry
function addToCalculationEntry(areaType, area){
const calculationEntry= document.getElementById('calculation-entry');
const count= calculationEntry.childElementCount;
if(count<7){
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('mx-4');
    p.innerHTML= `${count+1}.${areaType}   ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert to m<sup>2</sup></button>`
    calculationEntry.appendChild(p); 
}else{
    alert('You have exceed the limit calculating Geometric shape area!!!',{'background-color':'skyblue',
     'color': 'black'   
 });
}
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
    // Validation of input
    if(isNaN(base) || isNaN(height) || base>=0 || height>=0){
        alert("Please insert only Number greater than 0 !!!");
        return;
    }
    // calculate triangle area
     const area= 0.5*base*height;
     console.log(`Area of Triangle: ${area}`);
    //set triangle area
    const triangleArea= document.getElementById('triangle-area');
    triangleArea.innerText= area; 
    // add to calculation entry
    addToCalculationEntry("Triangle", area) 
}
// calculate the rectangle area
function calculateRectangleArea(){
    const width=getInputValue('rectangle-width');
    const length=getInputValue('rectangle-length');
    if(isNaN(width) || isNaN(length) || base>=0 || height>=0){
        alert("Please insert only Number !!!");
        return;
    }
    const area= width*length;
    setElementInnerText('rectangle-area', area);
    addToCalculationEntry("Rectangle", area) 
}
// calculate the Parallelogram area
function calculateParallelogramArea(){
    const base= getInputValue('parallelogram-base');
    const height= getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height) || base>=0 || height>=0){
        alert("Please insert only Number !!!");
        return;
    }
    const area= base*height;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry("Parallelogram", area) 
}
// calculate the Rhombus area
function calculateRhombusArea(){
    const diagonal1= getInputValue('rhombus-diagonal1');
    const diagonal2= getInputValue('rhombus-diagonal2');
    if(isNaN(diagonal1) || isNaN(diagonal2) || base>=0 || height>=0){
        alert("Please insert only Number !!!");
        return;
    }
    const area= 0.5*diagonal1*diagonal2;
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry("Rhombus", area) 
}
// calculate the Pentagon area
function calculatePentagonArea(){
    const perimeter= getInputValue('pentagon-perimeter');
    const apothem= getInputValue('pentagon-apothem');
    if(isNaN(perimeter) || isNaN(apothem) || base>=0 || height>=0){
        alert("Please insert only Number !!!");
        return;
    }
    const area= 0.5*perimeter*apothem;
    setElementInnerText('pentagon-area', area);
    addToCalculationEntry("Pentagon", area) 
}
// calculate the Ellipse area
function calculateEllipseArea(){
    const ellipseA= getInputValue('ellipse-a');
    const ellipseB= getInputValue('ellipse-b');
    if(isNaN(ellipseA) || isNaN(ellipseB) || base>=0 || height>=0){
        alert("Please insert only Number !!!");
        return;
    }
    const area= 3.1416*ellipseA*ellipseB;
    setElementInnerText('ellipse-area', area);
    addToCalculationEntry("Ellipse", area) 
}

