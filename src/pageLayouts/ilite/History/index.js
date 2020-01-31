import History from './History.js';

export { History };
//export CompetitionContainer;
export default History;

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)"
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: 0,
    border: 0
  }
};

export const query = graphql`
  query InstaPostModal($id: String) {
    instaNode(id: { eq: $id }) {
      likes
      id
      localFile {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      comments
      caption
    }
  }
`;