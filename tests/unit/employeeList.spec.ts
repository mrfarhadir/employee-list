import { renderToString } from "@vue/server-test-utils";
import EmployeeList from "@/components/employee/List.vue";
import EmployeeCardItem from "@/components/employee/CardItem.vue";
import Vuetify from "vuetify";

const vuetify = new Vuetify({});
const employees = [
  {
    name: "Agron Kabashi",
    office: "Lund",
    gitHub: "AgronKabashi",
    twitter: "_agronkabashi",
    linkedIn: "/pub/agron-kabashi/54/6a8/4a6",
    imagePortraitUrl: "https://i.1337co.de/profile/agron-kabashi",
    published: true,
  },
  {
    name: "Amir Tabrizi",
    office: "Lund",
    gitHub: "amir.tabriz",
    twitter: "amir_tabrizi",
    linkedIn: "/pub/amir.tabrizi/54/6a8/4a6",
    imagePortraitUrl: "https://i.1337co.de/profile/agron-kabashi",
    published: true,
  },
];

describe("Testing Employee List Component", () => {
  it("should render employee list item 1 name", async () => {
    const wrapper = await renderToString(EmployeeList, {
      vuetify,
      components: {
        EmployeeCardItem,
      },
      propsData: {
        items: employees,
      },
    });
    const $item1NameExists = wrapper.includes(
      `<span class="d-block">${employees[1].name}</span>`
    );
    expect($item1NameExists).toBe(true);
  });
});
