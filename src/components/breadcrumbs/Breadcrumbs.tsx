import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Breadcrumbs = () => {
  return (
    <Breadcrumb className='h-25 d-flex align-items-center bg-secondary'>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;