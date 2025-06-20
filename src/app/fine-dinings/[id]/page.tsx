import SingleFIne from '@/components/FineDinings/SingleFIne';

const page = ({ params }: { params: { id: string } }) => {
  return <SingleFIne id={params.id} />;
};
export default page;
