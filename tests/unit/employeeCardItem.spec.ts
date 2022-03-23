import { mount, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import EmployeeCardItem from "@/components/employee/CardItem.vue";

const vuetify = new Vuetify({});
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
  it("should render name correctly", () => {
    const wrapper = mount(EmployeeCardItem, {
      vuetify,
      propsData: {
        item: employee1,
      },
    });
    expect(wrapper.find(".employee-card-item").html().length).toBeGreaterThan(
      0
    );
    const $name = wrapper.find("span.d-block").text().includes(employee1.name);
    expect($name).toBe(true);
  });
});
