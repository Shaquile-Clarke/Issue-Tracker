import TestButton from "../../components/unit-test/TestButton";
import testRegister from "../../test/register.test";

export default function Test() {
  return (
    <div className="flex flex-col gap-1">
      <h1>TEST KIT</h1>
      <TestButton onClick={testRegister} className="bg-red-500">
        REGISTER
      </TestButton>
    </div>
  );
}
