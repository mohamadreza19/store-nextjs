import { Container } from "inversify";
import { useRouter } from "next/router";

const container = new Container();
class B {}

container.bind("Router").toConstantValue(B);

export default container;
