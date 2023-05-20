import teaser from './pdf_files/English_Teaser.pdf';
import teaser2 from './pdf_files/PJ-JP.pdf';
import a from '../../images/products/a.png';
import b from '../../images/products/b.png';
import retail from '../../images/products/retail.png';

const productData = [
  {
    title: 'Project Avocado',
    description: 'Capital Raise',
    cardImg: a,
    pdfFile: teaser ,
    type: null,
  },
  {
    title: 'Project Latte',
    description: 'Company Sale',
    cardImg: b,
    pdfFile: teaser2,
    type: null,
  },
  {
    title: 'Project Retail',
    description: 'Company Sale',
    cardImg: retail,
    pdfFile: teaser,
    type: null,
  }
]

export default productData;