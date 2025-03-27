import notFoundImg from "../../../../assets/Images/profile-card-bg.png";

const CoverImage = ({ coverImageUrl }: { coverImageUrl: string }) => {
  return (
    <div className="mb-6 h-56 overflow-hidden rounded-lg">
      <img
        className="h-full w-full object-cover object-center transition-all duration-300 ease-out hover:scale-110"
        src={coverImageUrl || notFoundImg}
      />
    </div>
  );
};
export default CoverImage;
