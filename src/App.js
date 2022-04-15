import filterFactory, {
  textFilter,
} from "./Table/react-bootstrap-table2-filter";
import paginationFactory from "./Table/react-bootstrap-table2-paginator";
import BootstrapTable from "./Table/react-bootstrap-table2";
import ToolkitProvider, {
  CSVExport,
} from "./Table/react-bootstrap-table2-toolkit";
const { ExportCSVButton } = CSVExport;

const products = [
  {
    id: 1,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 2,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 3,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 1,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 2,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 3,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 1,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 2,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 3,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 1,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 2,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 3,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 1,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 2,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 3,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 1,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 2,
    name: "pasf",
    price: "sadf",
  },
  {
    id: 3,
    name: "pasf",
    price: "sadf",
  },
];

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];
const data = [{ name: "1" }, { name: "2" }];

const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
};

function App() {
  const onclick = {
    onClick: (e, row, rowIndex) => {
      console.log("sate");
    },
  };
  console.log();
  return (
    <ToolkitProvider
      keyField="id"
      data={products}
      columns={columns}
      exportCSV={{ onlyExportFiltered: true, exportAll: false }}
      
    >
      {(props) => {
        console.log(props, 'data page')
        return (
          <div>
            <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>
            <ExportCSVButton {...props.csvProps} currentpage="true">
              Export current page
            </ExportCSVButton>

            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
              filter={filterFactory()}
            />
          </div>
        );
      }}
    </ToolkitProvider>
  );
}

export default App;
