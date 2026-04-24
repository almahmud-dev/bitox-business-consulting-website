import Responsive from "../ui/Responsive";

const StatSectionHo = ({ stats }) => {
  return (
    <Responsive.Grid  cols={{ base: 1, md: 2 }} gap="lg">
      {stats.map((stat, i) => (
        <div key={i}>
          <h2 className="headingTwo font-bold text-primary">
            {stat.value}
          </h2>
          <p className="para-xl text-primary  font-bold pt-[30px] pb-2">
            {stat.label}
          </p>
          <p className="para-lg font-normal text-tarnary">
            {stat.description} 
          </p>
        </div>
      ))}
    </Responsive.Grid>
  );
};

export default StatSectionHo;