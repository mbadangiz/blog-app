import { Link } from "react-router-dom";
import notFoundImg from "../../../../assets/Images/profile-card-bg.png";

const CoverImage = ({
  _id,
  coverImageUrl,
}: {
  _id: number;
  coverImageUrl: string;
}) => {
  return (
    <div className="mb-6 h-56 overflow-hidden rounded-lg">
      <Link to={`/profile/blogs/${_id}`}>
        <img
          className="h-full w-full object-cover object-center transition-all duration-300 ease-out hover:scale-110"
          src={coverImageUrl || notFoundImg}
        />
      </Link>
    </div>
  );
};
export default CoverImage;
