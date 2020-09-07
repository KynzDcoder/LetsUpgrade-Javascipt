function paste(){
    const content = document.getElementById("input1");
    const copiedContent = document.getElementById("input2");
    console.log(content.value);
    copiedContent.value = content.value;
}