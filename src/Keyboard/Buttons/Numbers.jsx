import { React } from 'react';
import  './Numbers.module.css';
import styles from '././Numbers.module.css';




let Numbers =(props) => {
  let keyboard = (  

<div class="grid-init grid">
    <nav class="box-init box l-screen">SCREEN</nav>
    <nav class="box-init box l-numbers">
    <div>
    <nav><button className="but-scr">7</button></nav> 
    <nav><button className="but-scr">4</button></nav>
    <nav><button className="but-scr">1</button></nav></div>
       
    <div>
      <nav><button className="but-scr">8</button></nav> 
      <div><button className="but-scr">5</button></div> 
      <div><button className="but-scr">2</button></div> 
    </div>
    <div>
      <nav><button className="but-scr">9</button></nav> 
      <nav><button className="but-scr">6</button></nav>  
      <nav><button className="but-scr">3</button></nav>
    </div> 
       
    </nav>

    <nav class="box-init box l-calculations">CAL</nav>
    <nav class="box-init box l-nul_dot"><nav><button className="but-nul">0</button></nav>
      <nav><button className="but-dot">.</button></nav><nav><button className="but-dot">C</button></nav>
    </nav>
    <nav class="box-init box l-equally">= EQU</nav>
       
</div>


/* <div class="grid-init grid">
    <div class="box-init box l-screen">SCREEN</div>
    <nav class="box-init box l-nav">NAV</nav>
    <main class="box-init box l-main">MAIN</main>
    <aside class="box-init box l-aside">ASIDE</aside>
    <section class="box-init box l-section">SECTION</section>
    <footer class="box-init box l-footer">FOOTER</footer>
</div> */

)

return (
    keyboard

    
    )

};

 export default Numbers;