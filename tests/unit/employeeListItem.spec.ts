import { shallowMount } from "@vue/test-utils";
import EmployeeListItem from "@/components/employee/ListItem.vue";

const employee1 = {
  name: "Agron Kabashi",
  office: "Lund",
  gitHub: "AgronKabashi",
  twitter: "_agronkabashi",
  linkedIn: "/pub/agron-kabashi/54/6a8/4a6",
  imagePortraitUrl: "https://i.1337co.de/profile/agron-kabashi",
  published: true,
};

describe("Testing Employee Card Item", () => {
  it("should render list item name correctly", () => {
    const wrapper = shallowMount(EmployeeListItem, {
      propsData: {
        item: employee1,
      },
    });

    const $name = wrapper.find("span").text().includes(employee1.name);

    expect($name).toBe(true);
  });
});
