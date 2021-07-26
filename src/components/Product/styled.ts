import styled from 'styled-components'

export const Container = styled.div`
    margin: 2rem 6rem;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    
    section{
      max-width: 62rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    button{
      position: absolute;
      color: white;
      background: #ff5aff;
      padding: .3rem .5em;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .img-container{
     width: 200px;
     height: 200px;
     overflow: hidden;
   }

   .product-tile{
    display: flex;
    flex-direction: column;
    width: 230px;
    padding: .5rem;
    margin: .5rem;
    background-color: #FAEEE7;
    color: gray;

      h1{ 
        font-size: 1.2rem;
        font-weight: normal;
      }
      p{
        font-size: 1.4rem;
      }
   }
`