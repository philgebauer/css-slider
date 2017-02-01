(function(){

  const elems = document.querySelectorAll('.controls input');

  const handleEvent = (e) => {
      const type = e.target.name,
          val = e.target.value,
          suffix = e.target.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${type}`, `${val + suffix}`);
  }

  elems.forEach( (elem) => {
      elem.addEventListener('change', handleEvent);
      elem.addEventListener('mousemove', handleEvent);
  });

}());
