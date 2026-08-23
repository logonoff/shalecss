import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/**
 * The base props for {@link Table}.
 *
 * @alpha
 */
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Whether the table should have striped rows */
  striped?: boolean;
  /** Whether the table should be scrollable on the x-axis */
  scrollable?: boolean;
}

/**
 * A `Table` displays tabular data.
 *
 * @example Basic example
 *
 * ```tsx
 * <Table striped scrollable>
 *   <Caption>Table Caption</Caption>
 *   <Thead>
 *     <Tr>
 *       <Th selectable state="active">
 *         Name
 *       </Th>
 *       <Th selectable>Type</Th>
 *       <Th>Size</Th>
 *     </Tr>
 *   </Thead>
 *   <Tbody>
 *     <Tr selectable>
 *       <Td>Graphs</Td>
 *       <Td>File folder</Td>
 *       <Td>2 items</Td>
 *     </Tr>
 *     <Tr selectable>
 *       <Td>Stats</Td>
 *       <Td>File folder</Td>
 *       <Td>4 items</Td>
 *     </Tr>
 *     <Tr selectable state="active">
 *       <Td>Botany Report.docx</Td>
 *       <Td>Word Document</Td>
 *       <Td>4 MB</Td>
 *     </Tr>
 *     <Tr selectable>
 *       <Td>Music.mid</Td>
 *       <Td>Audio File</Td>
 *       <Td>321 KB</Td>
 *     </Tr>
 *     <Tr selectable state="disabled">
 *       <Td>Notes.md</Td>
 *       <Td>Markdown Document</Td>
 *       <Td>123 KB</Td>
 *     </Tr>
 *     <Tr>
 *       <Td>Unselectable.exe</Td>
 *       <Td>Executable File</Td>
 *       <Td>4 MB</Td>
 *     </Tr>
 *   </Tbody>
 *   <Tfoot>
 *     <Tr>
 *       <Td>4 files</Td>
 *       <Td>-</Td>
 *       <Td>6 items, 8 MB</Td>
 *     </Tr>
 *   </Tfoot>
 * </Table>;
 * ```
 *
 * @alpha
 */
export const Table: React.FC<TableProps> = ({
  striped,
  scrollable,
  ...props
}) => (
  <div
    className={css({}, "shale-v1-table-container", {
      "shale-v1-table-scrollable": scrollable,
    })}
  >
    <table
      {...props}
      className={css(props, "shale-v1-table", {
        "shale-v1-table-striped": striped,
      })}
    />
  </div>
);

/**
 * The base props for {@link Caption}.
 *
 * @alpha
 */
export interface CaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

/**
 * A `Caption` provides a title or description for a table.
 *
 * @alpha
 */
export const Caption: React.FC<CaptionProps> = (props) => (
  <caption {...props} className={css(props, "shale-v1-caption")} />
);

/**
 * The base props for {@link Colgroup}.
 *
 * @alpha
 */
export interface ColgroupProps extends React.ColgroupHTMLAttributes<HTMLTableColElement> {}

/**
 * A `Colgroup` is a container for one or more `Col` elements, which define the
 * column structure of a table.
 *
 * @alpha
 */
export const Colgroup: React.FC<ColgroupProps> = (props) => (
  <colgroup {...props} className={css(props, "shale-v1-colgroup")} />
);

/**
 * The base props for {@link Col}.
 *
 * @alpha
 */
export interface ColProps extends React.ColHTMLAttributes<HTMLTableColElement> {}

/**
 * A `Col` defines the properties of a column in a table, such as its width and
 * alignment.
 *
 * @alpha
 */
export const Col: React.FC<ColProps> = (props) => (
  <col {...props} className={css(props, "shale-v1-col")} />
);

/**
 * The base props for {@link Thead}.
 *
 * @alpha
 */
export interface TheadProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

/**
 * A `Thead` contains the header rows of a table, which are usually column
 * headings.
 *
 * @alpha
 */
export const Thead: React.FC<TheadProps> = (props) => (
  <thead {...props} className={css(props, "shale-v1-thead")} />
);

/**
 * The base props for {@link Tbody}.
 *
 * @alpha
 */
export interface TbodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

/**
 * A `Tbody` contains the body rows of a table, which are usually the main data
 * rows.
 *
 * @alpha
 */
export const Tbody: React.FC<TbodyProps> = (props) => (
  <tbody {...props} className={css(props, "shale-v1-tbody")} />
);

/**
 * The base props for {@link Tfoot}.
 *
 * @alpha
 */
export interface TfootProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

/**
 * A `Tfoot` contains the footer rows of a table, which could be the summary or
 * total rows.
 *
 * @alpha
 */
export const Tfoot: React.FC<TfootProps> = (props) => (
  <tfoot {...props} className={css(props, "shale-v1-tfoot")} />
);

/**
 * The base props for {@link Tr}.
 *
 * @alpha
 */
export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Whether the row is selectable */
  selectable?: boolean;
  /** The state of the row (if selectable) */
  state?: StateVariant;
}

/**
 * A `Tr` represents a single row in a table, which can contain multiple `Th` or
 * `Td` elements.
 *
 * @alpha
 */
export const Tr: React.FC<TrProps> = ({ selectable, state, ...props }) => (
  <tr
    {...props}
    className={css(props, "shale-v1-tr", {
      "shale-v1--selectable": selectable,
      [`shale-v1--${state}`]: state,
    })}
  />
);

/**
 * The base props for {@link Th}.
 *
 * @alpha
 */
export interface ThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Whether the row in the header are selectable */
  selectable?: boolean;
  /** The state of the header row (if selectable) */
  state?: StateVariant;
}

/**
 * A `Th` represents a header cell in a table, which is typically used to label
 * columns or rows.
 *
 * @alpha
 */
export const Th: React.FC<ThProps> = ({ selectable, state, ...props }) => (
  <th
    {...props}
    className={css(props, "shale-v1-th", {
      "shale-v1--selectable": selectable,
      [`shale-v1--${state}`]: state,
    })}
  />
);

/**
 * The base props for {@link Td}.
 *
 * @alpha
 */
export interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

/**
 * A `Td` represents a standard cell in a table, which contains data for a
 * specific row and column.
 *
 * @alpha
 */
export const Td: React.FC<TdProps> = (props) => (
  <td {...props} className={css(props, "shale-v1-td")} />
);
