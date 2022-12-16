import { useOutletContext, useParams } from "react-router-dom";
import { useContacts} from "../Hooks/Customs";
import FormContact from "../FormContact/FormContact";
import { useEffect } from "react";

const UpdateContact = () => {
  const { id } = useParams();
  const { result: contact, isLoading, error } = useContacts({ id: id });
  const { setPage, mutate } = useOutletContext();

  useEffect(() => {
    setPage("edit");
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <View style={style.main}>
      <View>
        <Text style={style.label}>Input Numeri</Text>
        <TextInput style={style.textInput} keyboardType="numeric" placeholder="Inserire Numero" placeholderTextColor="#999" />
      </View>
      <View>
        <Text style={style.label}>Password</Text>
        <TextInput secureTextEntry={true} style={style.textInput} placeholder="Inserire la password" placeholderTextColor="#999" />
      </View>
      <View>
        <Text style={style.label}>Testo</Text>
        <TextInput style={style.textInput} placeholder="Inserire il testo" placeholderTextColor="#999" />
      </View>
      <View>
        <Text style={style.label}>Cerca</Text>
        <View style={[style.textInput, style.viewFlex]}>
          <TextInput
            style={{
              padding: 0,             
              width: '90%'
            }}
            placeholder="Cerca"
            placeholderTextColor="#999"
          />

          <MDCIcon
          icon={'search'}
          color={'#999'}>

          </MDCIcon>
        </View>
      </View>

      <View>
        <Card name={'Valentino'} surname={'Rossi'} />
      </View>
    </View>
    
  );
};

export default UpdateContact;
