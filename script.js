let index=0;
function changeColor(){
    let colors=["Red","Blue","pink","Cyan","yellow","orange","purple"];
    document.getElementsByTagName('body')[0].style.backgroundColor=colors[index++];
    if(index>colors.length-1){
        index=0;
    }
}