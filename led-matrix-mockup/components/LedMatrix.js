function LedMatrix({ matrix, square, fullsize }) {
  return (
    <div className="matrix">
      {matrix &&
        matrix.map(
          (l, i) =>
            l &&
            l.map(
              (c, j) =>
                c && (
                  <div
                    key={[i, j]}
                    style={{
                      backgroundColor: `rgb(${c[0]},${c[1]},${c[2]})`,
                      borderRadius: !square ? "100%" : undefined,
                      margin: !fullsize ? "5%" : undefined,
                    }}
                  ></div>
                )
            )
        )}
      <style jsx>{`
        .matrix {
          height: 95vmin;
          width: 95vmin;

          grid-template-rows: repeat(16, 1fr);
          grid-template-columns: repeat(16, 1fr);

          display: grid;
        }
      `}</style>
    </div>
  );
}

export default LedMatrix;
