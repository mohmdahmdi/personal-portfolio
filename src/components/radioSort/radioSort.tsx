import { RadioGroup, Radio } from "@nextui-org/radio";

const RadioSort = () => {
  return (
    <div>
      <RadioGroup label="Select your favorite city" orientation="horizontal">
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioSort;
