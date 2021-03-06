import WidgetsGridView from "../../components/widgets-grid/WidgetsGridView";
import AppLayout from "../../layouts/application/AppLayout";
import GraphCollection from "./GraphCollection";

export default class GraphLayout extends AppLayout {
  initialize() {
    this.collection = new GraphCollection();
  }

  loadData() {
    return this.collection.fetch();
  }

  getContentView() {
    return new WidgetsGridView({ model: this.collection, tabName: "graph" });
  }
}
