import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen:{
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7'
  },
  how:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 30,
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  age:{
    fontSize: 14,
    marginRight: 90,
  },
  hour: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  search:{
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  search: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default styles;