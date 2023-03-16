import React from 'react'

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
        {/* the syntax "showAdd" is one of reacts way of having a conditional statement. in the code block it is displaying the green button when the Add text is visible 
        the red text says close when the red button is active. This way of writing a conditional statement can be helpful. */}

        {/* yt link --https://youtu.be/w7ejDZ8SWv8?t=4742  */}
      </header>
    </>
  );
}
 Header.defaultProps = {
    title: 'Task tacker',
 }

export default Header