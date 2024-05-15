//seleciona todos os elementos com a class product-box

const boxes = document.querySelectorAll(".product-box")

//interação sobre cada elemento box
boxes.forEach(box => {
    //encontre elemento img dentro do elemento box atual
    const img = box.querySelector("product-image")

    //Adicionar os ouvintes de eventos aos elementos box atual
    box.addEventListener("mousemove", (e) => {
        const x = e.clientX - box.getBoundingClientRect().left
        const y = e.clientY - box.getBoundingClientRect().top

        console.log(x,y)
        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = "scale(3)"
        
    }) 
    box.addEventListener("mouseleave", (e) =>{
        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"
    } )  
})













// Código JavaScript para rolar a página para o topo 

    // Seleciona o botão
    const botaoVoltarAoTopo = document.getElementById('voltarAoTopo');

    // Adiciona um evento de clique ao botão
    botaoVoltarAoTopo.addEventListener('click', () => {
        // Faz a página voltar ao topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Adiciona um evento de rolagem à janela
    window.addEventListener('scroll', () => {
        // Verifica a posição da rolagem
        if (window.scrollY > 100) { // Exibe o botão quando a página é rolada para baixo
            botaoVoltarAoTopo.style.display = 'block';
        } else { // Oculta o botão quando a página está no topo
            botaoVoltarAoTopo.style.display = 'none';
        }
    });

//-------------------------------------------------------------------------

// Código JavaScript para banner automatico com botoes manuais

// Seleciona o elemento com a classe 'carousel' para controlar o carrossel
const carousel = document.querySelector('.carousel');

// Seleciona o botão de navegação anterior (prev)
const prevBtn = document.querySelector('.prev');

// Seleciona o botão de navegação seguinte (next)
const nextBtn = document.querySelector('.next');

// Contador para controlar a posição atual do carrossel
let counter = 0;

// Seleciona todos os itens do carrossel
const items = document.querySelectorAll('.carousel-item');

// Obtém a quantidade total de itens no carrossel
const itemCount = items.length;

// Obtém a largura do primeiro item do carrossel
const itemWidth = items[0].clientWidth;

// Define a transformação inicial do carrossel para mostrar o primeiro item
carousel.style.transform = `translateX(${-itemWidth * counter}px)`;

// Função para avançar no carrossel
function nextSlide() {
  if (counter < itemCount - 1) {
    counter++;
  } else {
    counter = 0; // Volta para a primeira imagem ao chegar ao final
  }
  carousel.style.transform = `translateX(${-itemWidth * counter}px)`;
}

// Evento para avançar no carrossel ao clicar no botão "Próximo"
nextBtn.addEventListener('click', () => {
  nextSlide();
  clearInterval(autoPlayInterval); // Limpa o intervalo de avanço automático
});

// Evento para voltar no carrossel ao clicar no botão "Anterior"
prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = itemCount - 1; // Volta para a última imagem ao chegar ao início
  }
  carousel.style.transform = `translateX(${-itemWidth * counter}px)`;
  clearInterval(autoPlayInterval); // Limpa o intervalo de avanço automático
});

let autoPlayInterval;

// Inicia o avanço automático a cada 3 segundos
autoPlayInterval = setInterval(nextSlide, 3000);

//-------------------------------------------------------------------------

// Função para adicionar Produtos do index.html ao carrinho e redirecionar para a página de loja
function addToCart(idProduto) {
    // Redireciona para loja.html e adiciona a âncora correspondente ao produto
    window.location.href = 'loja.html#' + idProduto;
    }

//-------------------------------------------------------------------------    
    
// Código JavaScript para dar zoom nas imagens dos produtos 

// Seleciona todos os elementos com a class product-box
const box = document.querySelectorAll(".product-box")

//Iteraçao sobre cada elemento box
boxes.forEach(box => {
    //Enconter o elemento img dentro do elemento box atual
    const img =box.querySelector(".product-image")

    //Adicionar os ouvintes de eventos ao elemento box atual
    box.addEventListener("mousemove", (e) => {
        const x = e.clientX - box.getBoundingClientRect().left
        const y = e.clientY - box.getBoundingClientRect().top

        console.log(x, y)

        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = "scale(3)"
    })

    box.addEventListener("mouseleave", (e) => {
      
        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"
    })

})


   