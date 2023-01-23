import React from "react";

export default function ServerError(props: { working: boolean }) {
  return (
    <div>
      {!props.working ? (
        <p
          data-testid={"error-message"}
          style={{ color: "red", fontStyle: "italic" }}
        >
          Error. Server is down.
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
