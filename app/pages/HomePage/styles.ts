// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: '10%',
  },
  pagerView: {
    flex: 1,
    width: '100%',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
