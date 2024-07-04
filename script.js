const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const icon = document.querySelector('.icon');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
    icon.className = 'icon fa-solid fa-heart'; 
    changeBackgroundImage('url("https://www.google.com/search?client=ms-android-vivo&sca_esv=e197cb97d6e85975&sca_upv=1&q=best+love+image&udm=2&fbs=AEQNm0AeMNWKf4PpcKMI-eSa16lJoRPMIuyspCxWO6iZW9F1Nu5UXlEfGU2YX1CrW9Nmm9Q3JIJZUqyMsLxos5tPU_UnqJ9Yac9VVJRGWfC4j5Vo8iVdmp0yHcykFiMIS9jUiQbN_U_vVDhXuiv9WtRFP3w1xyEfuag4hZCMtDiWR5yvDhV6r1V8aWdr2pDV3Csi4oLpFhod-EYWrnzWwrB0T8SfNvjCyg&sa=X&ved=2ahUKEwiwm9yCmI2HAxVv8DgGHVH9CT0QtKgLegQIGBAB&biw=360&bih=654&dpr=3#vhid=0C2FONzsCqeCXM&vssid=mosaic")');
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
