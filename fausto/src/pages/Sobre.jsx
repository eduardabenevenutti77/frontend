// export default function Sobre() {
//     return (
//       <div>
//         <h1 className="title">Sobre</h1>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut voluptatem facilis quo quia amet deleniti ea illum quis nemo cumque sit, quas autem ex aliquam ipsa laborum repudiandae consequuntur.</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis.</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sed, sint cum officiis temporibus quod esse aliquid voluptatum mollitia dolores nihil quo beatae. Ipsa eaque hic tempora provident at deleniti?</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis.</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis.</p>
//       </div>
//     );
//   }
  

import Card from 'react-bootstrap/Card';

export default function Sobre() {
  return (
    <div className='grid'>
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}