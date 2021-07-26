import React from 'react';
import * as S from './styled'
import  { FaTshirt, FaWeightHanging, FaGlasses, FaShoePrints } from 'react-icons/fa'

function Categories() {
  return(
    <S.Container>
    <button><FaTshirt /> Roupas Femininas</button>
    <button><FaWeightHanging /> Acessórios Femininos</button>
    <button><FaGlasses /> Armações de óculos</button>
    <button><FaShoePrints /> Sapatos</button>
    </S.Container>
  )
}

export default Categories;