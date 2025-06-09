import { useState } from "react";
import { Row, Col, Modal, Image } from "react-bootstrap";

const ProjectGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (src) => setSelectedImage(src);
  const handleClose = () => setSelectedImage(null);

  return (
    <>
      <Row className="g-4 mb-4">
        {images.map((src, index) => (
          <Col xs={12} sm={6} md={6} lg={4} key={index}>
            <img
              src={src}
              alt={`Project Image ${index + 1}`}
              className="img-fluid rounded shadow-sm w-100"
              style={{ cursor: "pointer" }}
              onClick={() => handleOpen(src)}
            />
          </Col>
        ))}
      </Row>

      <Modal show={!!selectedImage} onHide={handleClose} centered size="xl">
        <Modal.Body className="p-0">
          <Image src={selectedImage} alt="Expanded Project" className="w-100" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectGallery;
